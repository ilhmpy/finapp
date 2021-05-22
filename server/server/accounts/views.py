from django.shortcuts import render
from .models import User, Role
from .serializers import UserSerializer, RoleSerializer, RegisterSerializer, LoginSerializer
from rest_framework import status, generics, filters, permissions
from rest_framework.response import Response
from rest_framework.permissions import BasePermission
from knox.models import AuthToken

from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.urls import reverse

from django_rest_passwordreset.signals import reset_password_token_created
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes


class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_staff


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [
        IsAdminUser,
    ]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
        })


@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated, ))
def validate(request):
    is_auth = request.user.is_active
    return JsonResponse({'authenticated': is_auth})


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """
    # send an e-mail to the user
    context = {
        'current_user': reset_password_token.user,
        'email': reset_password_token.user.email,
        'reset_password_url': "{}?token={}".format(reverse('reset-password-request'), reset_password_token.key)
    }

    # render email text
    email_html_message = render_to_string(
        'accounts/user_reset_password.html', context)
    email_plaintext_message = render_to_string(
        'accounts/user_reset_password.txt', context)

    msg = EmailMultiAlternatives(
        # title:
        "Восстановление пароля для {title}".format(title="Finapp"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@somehost.local",
        # to:
        [reset_password_token.user.email]
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()
