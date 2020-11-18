from django.db.models.deletion import CASCADE
from to_do.accounts.models import User
from django.db import models
from django.utils import timezone
# Create your models here.


class Todo(models.Model):
    user = models.ForeignKey(User, related_name='todos', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    details = models.TextField()
    date = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.title