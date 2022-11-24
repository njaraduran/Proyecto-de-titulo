from django.contrib import admin
from documents.models import documents


@admin.register(documents)
class documentsAdmin(admin.ModelAdmin):
    pass
