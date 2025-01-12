from django.http import JsonResponse
from .models import Plant, User

def get_plants(request):
    plants = list(Plant.objects.values())
    return JsonResponse({'plants': plants})

def get_users(request):
    users = list(User.objects.values())
    return JsonResponse({'users': users})
