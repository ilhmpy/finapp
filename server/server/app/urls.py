from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    #budget views
    path('budget/', include('budget.urls')),
    #employees views
    path('employees/', views.EmployeeList.as_view()),
    path('employees/<str:pk>', views.EmployeeDetail.as_view()),
    #admin panel views
    path('facilities/', views.FacilityList.as_view()),
    path('facilities/<str:pk>', views.FacilityDetail.as_view()),
    #revenue views
    path('revenue/', views.RevenueList.as_view()),
    path('revenue/<str:pk>', views.RevenueDetail.as_view()),

    path('production-type/', views.ProductionTypeList.as_view()),
    path('production-type/<str:pk>', views.ProductionTypeDetail.as_view()),
    path('importers/', views.ImporterList.as_view()),
    path('importers/<str:pk>', views.ImporterDetail.as_view()),
    path('scan/', views.ScanClass.as_view()),
    path('scan/<str:pk>', views.ScanDetail.as_view()),
    path('invoice/', views.InvoiceList.as_view()),
    path('invoice/<str:pk>', views.InvoicDetail.as_view()),
]
