from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, generics, filters, permissions
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from datetime import datetime
import django_filters

from accounts.models import Role, User
from accounts.views import IsAdminUser
from .models import UserFacility, Facility, Employee, Revenue
from .models import Importer, ProductionType, Scan, Invoice

from .serializers import EmployeeSerializer, RevenueSerializer, ImporterSerializer, ProductionTypeSerializer, FacilitySerializer, ScanSerializer, InvoiceSerializer


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
  def put(self, request, pk):
    snippet = Employee.objects.get(pk=pk)
    serializer = EmployeeSerializer(snippet, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delet(self, request, pk):
    article = self.get_object(pk)
    article.delete()
    return Response({
      "message": "Employee with id `{}` has been deleted.".format(pk)
    }, status=204)



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

  def put(self, request, pk):
    object = Importer.objects.get(pk=pk)
    serializer = ImporterSerializer(object, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delet(self, request, pk):
    importer = self.get_object(pk)
    importer.delete()
    return Response({
      "message": "Employee with id `{}` has been deleted.".format(pk)
    }, status=204)

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
  ordering_fields = ['cash_income',  'added_at']
  filterset_class = RevenueDateFilter
  dataTime = datetime.now().date()
  def get(self, request, format=None):
    dataTime = datetime.now().date()
    dayli = Revenue.objects.get(added_at=dataTime).cash_income
    graf = Revenue.objects.filter(added_at=dataTime)[1:7]

    sum_1 = 0
    week1 = Revenue.objects.filter(added_at=dataTime)[1:5]
    for i in week1:
      sum_1 += i.cash_income


    serializer = RevenueSerializer(graf, many=True)
    return Response(sum_1,  dayli, data=serializer.data ,status=status.HTTP_200_OK  )


class RevenueDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Revenue.objects.all()
  serializer_class = RevenueSerializer
class ScanDateFilter(django_filters.FilterSet):
  added_at = django_filters.DateFromToRangeFilter()

  class Meta:
    model = Scan
    fields = ['added_at']

class ScanClass(generics.ListCreateAPIView):
  queryset = Scan.objects.all()
  serializer_class = ScanSerializer
  filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
  ordering_fields = ['name', 'type_scan', 'file', 'added_at', 'facility']
  filterset_class = ScanDateFilter
  def get(self, request):
    scan = Scan.objects.all()
    serializer = ScanSerializer(scan, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  def post(self, request):
    serializer = ScanSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      saved = serializer.save()
    return Response(data=serializer.data, status=status.HTTP_201_CREATED)
class ScanDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Scan.objects.all()
  serializer_class = ScanSerializer
  def put(self, request, pk):
    object = Scan.objects.get(pk=pk)
    serializer = ScanSerializer(object, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  def delet(self, request, pk):
    importer = self.get_object(pk)
    importer.delete()
    return Response({
      "message": "Employee with id `{}` has been deleted.".format(pk)
    }, status=204)


class InvoiceDateFilter(django_filters.FilterSet):
  added_at = django_filters.DateFromToRangeFilter()
  class Meta:
    model = Invoice
    fields = ['date']


class InvoiceList(generics.ListCreateAPIView):
  queryset = Invoice.objects.all()
  serializer_class = InvoiceSerializer
  filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
  ordering_fields = ['date','added_by', 'added_at' 'invoice_number','amount', 'tax_amount', 'importer', 'facility','comment','payment_type', 'is_confirmed ']
  filterset_class = InvoiceDateFilter
  def get(self, requests):
    invoice = Invoice.objects.all()
    serializer = InvoiceSerializer(invoice, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)
  def post(self, request):
    serializer = InvoiceSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      invoice_saved = serializer.save()
    return Response(data=serializer.data, status=status.HTTP_201_CREATED)
class InvoicDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Invoice.objects.all()
  serializer_class = InvoiceSerializer
  def put(self, request, pk):
    object = Invoice.objects.get(pk=pk)
    serializer = InvoiceSerializer(object, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  def delet(self, request, pk):
    object = self.get_object(pk)
    object.delete()
    return Response({
      "message": "Employee with id `{}` has been deleted.".format(pk)
    }, status=204)


