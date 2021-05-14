from django.contrib import admin
from .models import Facility, Revenue, Employee
from .models import Importer, ProductionType

admin.site.register(Facility)
admin.site.register(Revenue)
admin.site.register(Employee)
admin.site.register(Importer)
admin.site.register(ProductionType)