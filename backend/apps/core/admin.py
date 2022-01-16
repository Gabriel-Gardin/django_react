from django.contrib import admin
from .models import List, Item

@admin.register(List)
class AuthorAdmin(admin.ModelAdmin):
    pass


@admin.register(Item)
class AuthorAdmin(admin.ModelAdmin):
    pass