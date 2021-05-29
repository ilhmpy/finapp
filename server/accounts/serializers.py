from rest_framework import serializers
from .models import Role, User
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password', 'is_superuser', 'full_name', 'is_staff',
                  'is_active', 'email', 'phone_number', 'date_joined']
        extra_kwargs = {'password': {'write_only': True}, 'is_superuser': {
            'read_only': True}, 'date_joined': {'read_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['email'], validated_data['password'])
        user.phone_number = validated_data['phone_number']
        user.full_name = validated_data['full_name']
        user.save()

        return user


# class RegisterSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = User
#     fields = ('id', 'email', 'phone_number', 'full_name')
#
#
#   def create(self, validated_data):
#     user = User.objects.create_user(validated_data['email'], validated_data['password'])
#     user.phone_number = validated_data['phone_number']
#     user.full_name = validated_data['full_name']
#     user.save()
#     return user


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        else:
            raise serializers.ValidationError("Incorrect Credentials")


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'


class RegisterSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ('email', 'phone_number', 'full_name')

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
