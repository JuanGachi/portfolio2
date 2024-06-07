from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.home, name='home'),
    path('projects/', views.post_list, name='posts'),
    path('projects/<int:post_id>/', views.post_detail, name='post_detail'),
    path('contact/', views.contact, name='contact'),
]




