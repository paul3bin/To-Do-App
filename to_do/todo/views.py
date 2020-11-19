from django.contrib import messages
from django.db.models import query
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.http import Http404
from django.views import generic
from braces.views import SelectRelatedMixin
from . import views, forms, models
from django.contrib.auth import get_user_model

User = get_user_model()

class UserTodo(generic.ListView, SelectRelatedMixin):
    model = models.Todo
    template_name = 'todo/todo_lists.html'
    select_related = ('user', 'todo')
    

class AddTodo(LoginRequiredMixin, SelectRelatedMixin, generic.CreateView):
    form_class = forms.TodoForm
    model = models.Todo

    def form_valid(self, form):
        self.object = form.save()
        self.object.user = self.request.user
        self.object.save()
        return super().form_valid(form)

class DeleteTodo(LoginRequiredMixin, SelectRelatedMixin, generic.DeleteView):
    model = models.Todo
    select_related = ('user')
    success_url = reverse_lazy('todo:user_todo_list')