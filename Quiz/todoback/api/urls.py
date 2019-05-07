from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'contacts/$', views.ContactList.as_view()),
    url(r'contacts/(?P<pk>\d+)/$', views.Detail.as_view()),
    url(r'users/$', views.UserList.as_view()),
    url(r'login/$', views.login),
    url(r'logout/$', views.logout),
]