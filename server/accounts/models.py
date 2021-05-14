from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager

# Create your models here.
class User(AbstractUser):
  username = None
  email = models.EmailField(default="", unique=True)
  phone_number = models.CharField(default="", max_length=13, unique=True)
  is_staff = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)
  full_name = models.CharField(default="", max_length=255)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['password', 'phone_number', 'full_name']

  objects = CustomUserManager()

  def __str__(self):
    return self.full_name


class Role(models.Model):
  name = models.CharField(default="", max_length=225)

  def __str__(self):
    return self.name