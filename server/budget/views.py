from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, generics, filters, permissions
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

import django_filters

from accounts.models import Role, User
from accounts.views import IsAdminUser
from .models import IncomeCategory, Income, ExpenseCategory, Expense
from .serializers import IncomeSerializer, IncomeCategorySerializer, ExpenseCategorySerializer, ExpenseSerializer


class IncomeDateFilter(django_filters.FilterSet):
  added_at = django_filters.DateFromToRangeFilter()

  class Meta:
    model = Income
    fields = ['added_at', 'facility', ]


class IncomeList(generics.ListCreateAPIView):
  #permission_classes = [permissions.isAuthenticated]
  queryset = Income.objects.all()
  serializer_class = IncomeSerializer
  filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
  filterset_class = IncomeDateFilter
  ordering_fields = ['amount', 'contragent', 'description', 'is_verified', 'added_at']
  def get_queryset(self):
    facility = self.request.data.get('facility')
    dataset = []
    if not facility and not self.request.user.is_staff:
      # dont return anything
      return Income.objects.filter()
    elif self.request.user.is_superuser:
      # return all for admins
      return self.queryset
    else:
      return self.queryset
  def perform_create(self, serializer):
    return serializer.save(added_by=self.request.user)


class IncomeDetail(generics.RetrieveUpdateDestroyAPIView):
  #permission_classes = [permissions.isAuthenticated]
  queryset = Income.objects.all()
  serializer_class = IncomeSerializer


class ExpenseDateFilter(django_filters.FilterSet):
  added_at = django_filters.DateFromToRangeFilter()

  class Meta:
    model = Income
    fields = ['added_at', 'facility', ]


class ExpenseList(generics.ListCreateAPIView):
  #permission_classes = [permissions.isAuthenticated]
  queryset = Expense.objects.all()
  serializer_class = ExpenseSerializer
  filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
  filterset_class = IncomeDateFilter
  ordering_fields = ['amount', 'contragent', 'description', 'is_verified', 'added_at']
  def get_queryset(self):
    facility = self.request.data.get('facility')
    dataset = []
    if not facility and not self.request.user.is_staff:
      # dont return anything
      return Income.objects.filter()
    elif self.request.user.is_superuser:
      # return all for admins
      return self.queryset
    else:
      return self.queryset
  def perform_create(self, serializer):
    return serializer.save(added_by=self.request.user)


class ExpenseDetail(generics.RetrieveUpdateDestroyAPIView):
  #permission_classes = [permissions.isAuthenticated]
  queryset = Expense.objects.all()
  serializer_class = ExpenseSerializer
