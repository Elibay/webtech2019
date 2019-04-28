from django.conf.urls import url
from api import views

# urlpatterns = [
#     url(r'task_list/$', task_list),
#     url(r'task_list/(?P<pk>\d+)/$', task_list_detail),
#     url(r'task_list/(?P<pk>\d+)/task/$', task_list_detail_tasks),
#     url(r'task/(?P<pk>\d+)/$', task_detail),
# ]

urlpatterns = [
    url(r'task_list/$', views.TasksList.as_view()),
    url(r'task_list/(?P<pk>\d+)/$', views.TasksDetail.as_view()),
]

