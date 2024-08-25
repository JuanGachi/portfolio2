from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio_vehiculos, name='inicio_vehiculos'),
    path('lista/', views.lista_vehiculos, name='lista_vehiculos'),
    path('agregar/', views.agregar_vehiculo, name='agregar_vehiculo'),
]
