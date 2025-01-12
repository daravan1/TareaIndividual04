# api/admin.py
from django.contrib import admin
from .models import Plant, User

@admin.register(Plant)
class PlantAdmin(admin.ModelAdmin):
    list_display = ('common_name', 'species', 'conservation_status', 'registered_by')
    search_fields = ('common_name', 'species')

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'role')
    list_filter = ('role',)