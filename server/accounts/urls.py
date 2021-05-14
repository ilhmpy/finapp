from django.urls import path, include
from django.conf.urls import url
from . import views
from knox import views as knox_views
from django_rest_passwordreset.views import reset_password_request_token, reset_password_confirm, reset_password_validate_token

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<str:pk>', views.UserDetail.as_view()),
    path('auth', include('knox.urls')),
    path('auth/register', views.RegisterAPI.as_view()),
    path('auth/login', views.LoginAPI.as_view()),
    path('auth/get-user', views.UserAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view()),
    path('auth/validate', views.validate),
    url(r'^auth/password-reset/validate_token/',
        reset_password_validate_token, name="reset-password-validate"),
    url(r'^auth/password-reset/confirm/',
        reset_password_confirm, name="reset-password-confirm"),
    url(r'^auth/password-reset/', reset_password_request_token,
        name="reset-password-request"),
]
