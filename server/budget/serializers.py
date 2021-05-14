from .models import Income, IncomeCategory, Expense, ExpenseCategory
from rest_framework import serializers


class IncomeCategorySerializer(serializers.ModelSerializer):
  
  class Meta:
    model = IncomeCategory
    fields = '__all__'


class IncomeSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Income
    fields = '__all__'


class ExpenseCategorySerializer(serializers.ModelSerializer):
  
  class Meta:
    model = ExpenseCategory
    fields = '__all__'


class ExpenseSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Expense
    fields = '__all__'

