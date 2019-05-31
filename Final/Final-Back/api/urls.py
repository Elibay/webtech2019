from django.urls import path

from api.view import *

urlpatterns = [

    path('products/', ProductsAPIView.as_view()),
    path('user_products/', UserProductAPIView.as_view()),
    path('user_products/<int:pk>/', product_detail),

    path('login/', login),
    path('logout/', logout),
]
