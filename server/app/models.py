from django.db import models
from accounts.models import User, Role
from django.utils.timezone import now


class Facility(models.Model):
  name = models.CharField(max_length=255, default="")
  bank_name = models.CharField(max_length=255, default="")
  correspondent_account = models.CharField(max_length=255, default="")
  inn = models.CharField(max_length=255, default="")
  bik = models.CharField(max_length=255, default="")
  expense_account = models.CharField(max_length=255, default="")
  comment = models.TextField(max_length=10000, default="")
  is_active = models.BooleanField(default=True)

  def __str__(self):
    return self.name


class UserFacility(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  facility = models.ForeignKey(Facility, on_delete=models.CASCADE)
  role = models.ForeignKey(Role, on_delete=models.CASCADE)

  def __str__(self):
    return f'{self.user.name} | {self.facility.name} | {self.role.name}'


class Employee(models.Model):
  subdivision_choices = [
    ('1', 'Администрация'),
    ('2', 'Бар'),
    ('3', 'Официанты'),
    ('4', 'Кухня'),
    ('5', 'Технический Персонал'),
  ]

  payment_type_choices = [
    ('1', 'Оклад'),
    ('2', 'Почасовая ставка'),
    ('3', 'Посуточная ставка'),
  ]

  full_name = models.CharField(default="", max_length=255)
  phone_number = models.CharField(default="", max_length=255)
  # change to another foreign key later
  subdivision = models.CharField(default='1', max_length=255, choices=subdivision_choices)
  payment_type = models.CharField(default='1', max_length=255, choices=payment_type_choices)
  pay_rate = models.IntegerField(default=0)
  date_accepted = models.DateTimeField(auto_now_add=True)
  birth_date = models.DateTimeField(auto_now_add=True)
  address_residing = models.CharField(default="", max_length=255)
  actual_address = models.CharField(default="", max_length=255)
  comment = models.TextField(default="")
  is_foreign = models.BooleanField(default=False)
  profile_picture = models.ImageField(default=None, blank=True, null=True, upload_to="images/")
  is_active = models.BooleanField(default=True)
  date_fired = models.DateField(blank=True, null=True)
  facility = models.ForeignKey(Facility, blank=True, null=True, default=None, on_delete=models.CASCADE)
  # todo: figure out documents

  def __str__(self):
    return self.user.name


class Revenue(models.Model):
  date = models.DateTimeField(auto_now_add=True)
  cash_income = models.IntegerField(default=0)
  cash_free_income = models.IntegerField(default=0)
  np = models.IntegerField(default=0)
  tables = models.IntegerField(default=0)
  guests = models.IntegerField(default=0)
  added_by = models.ForeignKey(User, on_delete=models.CASCADE)
  added_at = models.DateField(default=now)
  facility = models.ForeignKey(Facility, default=None, blank=True, null=True, on_delete=models.CASCADE)

  def get_sum(self):
    return self.cash_income + self.cash_free_income + self.np

  def get_average_table(self):
    return self.get_sum() / self.tables

  def get_average_guest(self):
    return self.get_sum() / self.guests

  def __str__(self):
    return f'{self.get_sum()} | {self.added_by.full_name}'


class ProductionType(models.Model):
  name = models.CharField(max_length=255, default="")

  def __str__(self):
    return self.name


class Importer(models.Model):
  company_name = models.CharField(max_length=255, default="")
  bank_name = models.CharField(max_length=255, default="")
  correspondent_account = models.CharField(max_length=255, default="")
  inn = models.CharField(max_length=255, default="")
  bik = models.CharField(max_length=255, default="")
  expense_account = models.CharField(max_length=255, default="")
  production_type = models.CharField(default="", max_length=255)
  custom_production_type = models.CharField(default="", max_length=255)
  comment = models.TextField(max_length=1000, default="")
  facility = models.ForeignKey(Facility, blank=True, null=True, default=None, on_delete=models.CASCADE)
  is_deleted = models.BooleanField(default=False)

  def __str__(self):
    return self.company_name + " | " + self.facility.name


class Invoice(models.Model):
  date = models.DateTimeField(auto_now_add=True)
  added_by = models.ForeignKey(User, on_delete=models.CASCADE)
  added_at = models.DateField(default=now)
  invoice_number = models.IntegerField(default=0)
  amount = models.FloatField(default=0)
  tax_amount = models.FloatField(default=0)
  importer = models.ForeignKey(Importer, on_delete=models.CASCADE)
  facility = models.ForeignKey(Facility, default=None, blank=True, null=True, on_delete=models.CASCADE)
  comment = models.TextField(max_length=10000, default="")
  payment_type = models.CharField(max_length=255, default="cash")
  is_confirmed = models.BooleanField(default=False)

class Scan(models.Model):
  scan_types = [
    ('1', 'Накладная'),
    ('2', 'Расходы'),
    ('3', 'Сканы'),
    ('4', 'Уставные Документы'),
    ]
  type_scan = models.CharField(default='1', max_length=255, choices=scan_types)
  added_at = models.DateField(auto_now_add=True)
  name = models.CharField(default="", max_length=255)
  file = models.FileField()
  facility = models.ForeignKey(Facility, default=None, blank=True, null=True, on_delete=models.CASCADE)


  def __str__(self):
    return self.name