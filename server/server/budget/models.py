from django.db import models
from accounts.models import User
from django.utils.timezone import now
from app.models import Facility


class IncomeCategory(models.Model):
  name = models.CharField(max_length=255, default="")

  def __str__(self):
    return self.name


class Income(models.Model):
  added_by = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
  amount = models.IntegerField(default=0)
  category = models.ForeignKey(IncomeCategory, on_delete=models.CASCADE)
  description = models.TextField(default="", max_length=1000)
  is_verified = models.BooleanField(default=False)
  contragent = models.CharField(max_length=255, default="")
  facility = models.ForeignKey(Facility, blank=True, null=True, default=None, on_delete=models.CASCADE)
  added_at = models.DateField(default=now)


class ExpenseCategory(models.Model):
  name = models.CharField(max_length=255, default="")
  
  def __str__(self):
    return self.name


class Expense(models.Model):
  added_by = models.ForeignKey(User, on_delete=models.CASCADE)
  amount = models.IntegerField(default=0)
  category = models.ForeignKey(ExpenseCategory, on_delete=models.CASCADE)
  description = models.TextField(default="", max_length=1000)
  is_verified = models.BooleanField(default=False)
  contragent = models.CharField(max_length=255, default="")
  facility = models.ForeignKey(Facility, blank=True, null=True, default=None, on_delete=models.CASCADE)

