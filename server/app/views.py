from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, generics, filters, permissions
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

import django_filters

from accounts.models import Role, User
from accounts.views import IsAdminUser
from .models import UserFacility, Facility, Employee, Revenue
from .models import Importer, ProductionType

from .serializers import EmployeeSerializer, RevenueSerializer, ImporterSerializer, ProductionTypeSerializer, FacilitySerializer


class FacilityList(generics.ListCreateAPIView):
  queryset = Facility.objects.all()
  serializer_class = FacilitySerializer
  filter_backends = [filters.OrderingFilter]
  ordering_fields = ['name']


class FacilityDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Facility.objects.all()
  serializer_class = FacilitySerializer


class EmployeeFilter(django_filters.FilterSet):

  class Meta:
    model = Employee
    fields = ['facility', ]


class EmployeeList(APIView):
  queryset = Employee.objects.all()
  serializer_class = EmployeeSerializer
  filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
  filterset_class = EmployeeFilter
  ordering_fields = ['full_name', 'phone_number', 'is_active']

  def get(self, request, format=None):
    candidates = Employee.objects.all()
    serializer = EmployeeSerializer(candidates, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)

  def post(self, request, format=None):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save(
          profile_picture=request.data.get('profile_picture')
        )
      return Response(data=serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Employee.objects.all()
  serializer_class = EmployeeSerializer


class ImporterFilter(django_filters.FilterSet):

  class Meta:
    model = Importer
    fields = ['facility', ]


class ImporterList(generics.ListCreateAPIView):
  #permission_classes = [permissions.IsAuthenticated]

  serializer_class = ImporterSerializer
  filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
  filterset_class = ImporterFilter
  ordering_fields = ['name', 'production_type', 'comment',]

  def get_queryset(self):
    facility = self.request.data.get('facility')
    dataset = []
    if not facility and not self.request.user.is_staff:
      # dont return anything
      return Importer.objects.filter()
    elif self.request.user.is_superuser:
      # return all for admins
      return self.queryset.filter(is_deleted=False)
    else:
      return self.queryset.filter(is_deleted=False, facility=facility)

  def perform_create(self, serializer):
    serializer.save()


class ImporterDetail(generics.RetrieveUpdateDestroyAPIView):
  permission_classes = [
    permissions.IsAuthenticated
  ]
  queryset = Importer.objects.all()
  serializer_class = ImporterSerializer


class ProductionTypeList(generics.ListCreateAPIView):
  queryset = ProductionType.objects.all()
  serializer_class = ProductionTypeSerializer
  filter_backends = [filters.OrderingFilter]
  ordering_fields = ['name']


class ProductionTypeDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = ProductionType.objects.all()
  serializer_class = ProductionTypeSerializer


class RevenueDateFilter(django_filters.FilterSet):
  added_at = django_filters.DateFromToRangeFilter()

  class Meta:
    model = Revenue
    fields = ['added_at']


class RevenueList(generics.ListCreateAPIView):
  queryset = Revenue.objects.all()
  serializer_class = RevenueSerializer
  filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
  ordering_fields = ['cash_income', 'cash_free_income', 'np', 'added_at']
  filterset_class = RevenueDateFilter


class RevenueDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Revenue.objects.all()
  serializer_class = RevenueSerializer

