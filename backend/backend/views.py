from django.shortcuts import render
from api.models import User  # Import the User model

def index(request):
    user_count = User.objects.count()  # Get the total number of users
    return render(request, 'index.html', {'user_count': user_count})