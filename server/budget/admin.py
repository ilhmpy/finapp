from django.contrib import admin
from .models import Expense, ExpenseCategory, Income, IncomeCategory

admin.site.register(Expense)
admin.site.register(ExpenseCategory)
admin.site.register(Income)
admin.site.register(IncomeCategory)