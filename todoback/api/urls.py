from django.conf.urls import url, include
from .views import *

urlpatterns = [
    url(r'task_lists/', task_list),
    # url(r'task_lists/', task_list),
    # url(r'task_lists/', task_list),
]
