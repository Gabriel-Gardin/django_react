from django.contrib import admin
from .models import List

@admin.register(List)
class AuthorAdmin(admin.ModelAdmin):
    pass