from django.shortcuts import render, get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
from .models import Post, Project

def home(request):
    return render(request, 'home.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        
        send_mail(
            f'Mensaje de {name}', 
            message, 
            email, 
            [settings.EMAIL_HOST_USER], 
            fail_silently=False,
        )
        messages.success(request, 'Gracias por tu mensaje. Me pondré en contacto contigo pronto.')
    
    return render(request, 'contact.html')

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'posts.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'post_detail.html', {'post': post})
