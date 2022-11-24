from django.contrib import admin
from expedientes.models import expediente


@admin.register(expediente)
class ExpedienteAdmin(admin.ModelAdmin):
    pass
