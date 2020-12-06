from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import viewsets
from . import serializers, models
from rest_framework.authentication import TokenAuthentication

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (AllowAny, )

    def get_queryset(self):
        return super().get_queryset().filter(id=self.request.user.id)

class ToDoViewSet(viewsets.ModelViewSet):
    queryset = models.ToDo.objects.all()
    serializer_class = serializers.ToDoSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return super().get_queryset().filter(user = self.request.user)