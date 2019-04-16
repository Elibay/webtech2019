from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'task_list/$', task_list),
    url(r'task_list/(?P<pk>\d+)/$', task_list_detail),
    url(r'task_list/(?P<pk>\d+)/task/$', task_list_detail_tasks),
    url(r'task/(?P<pk>\d+)/$', task_detail),
]
