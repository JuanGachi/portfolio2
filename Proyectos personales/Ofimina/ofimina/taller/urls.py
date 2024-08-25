from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio_taller, name='inicio_taller'),
    path('montajes/', views.lista_montajes, name='lista_montajes'),
    path('montajes/agregar/', views.agregar_montaje, name='agregar_montaje'),
    path('recursos/', views.lista_recursos, name='lista_recursos'),
    path('recursos/agregar/', views.agregar_recurso, name='agregar_recurso'),
]
