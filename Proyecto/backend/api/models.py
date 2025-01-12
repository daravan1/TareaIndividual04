from django.db import models

class Plant(models.Model):
    common_name = models.CharField(max_length=100)
    species = models.CharField(max_length=100)
    conservation_status = models.CharField(max_length=50)
    registered_by = models.CharField(max_length=100)

class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=50, choices=[('admin', 'Admin'), ('user', 'User')])
