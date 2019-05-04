from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'task_list/$', views.TaskList.as_view()),
    url(r'task_list/(?P<pk>\d+)/$', views.Detail.as_view()),
    url(r'users/$', views.UserList.as_view()),
    url(r'login/$', views.login),
    url(r'logout/$', views.logout),

]

