from django.urls import path
from . import views

urlpatterns = [
    path('plants/', views.get_plants, name='get_plants'),
    path('users/', views.get_users, name='get_users'),
]
