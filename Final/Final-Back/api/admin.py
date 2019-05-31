from django.contrib import admin

# Register your models here.
from api.models import Product, UserProduct

admin.site.register(Product)
admin.site.register(UserProduct)