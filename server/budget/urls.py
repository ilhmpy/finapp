from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    #income views
    path('income/', views.IncomeList.as_view()),
    path('income/<str:pk>', views.IncomeDetail.as_view()),
    
    #expense views
    path('expense/', views.ExpenseList.as_view()),
    path('expense/<str:pk>', views.ExpenseDetail.as_view()),
]
