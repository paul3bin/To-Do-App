from django.conf.urls import url
from . import views

app_name = 'todo'
urlpatterns = [
    url(r'^add/$', views.AddTodo.as_view(), name='add'),
    url(r'^remove/$', views.DeleteTodo.as_view(), name='remove'),
    url(r'list/$', views.UserTodo.as_view(), name='user_todo_list')
]