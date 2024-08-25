from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('almacen/', include('almacen.urls')),
    path('taller/', include('taller.urls')),
    path('facturacion/', include('facturacion.urls')),
    path('vehiculos/', include('vehiculos.urls')),
]
