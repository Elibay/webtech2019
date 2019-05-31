from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Product, UserProduct
from api.serializers import ProductSerializer, UserProductSerializer


class ProductsAPIView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)

    search_fields = ('name', 'price')

    def get_queryset(self):
        return Product.objects.all()


class UserProductAPIView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return UserProduct.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        return UserProductSerializer

    def perform_create(self, serializer):
        id = self.request.data.get('product')
        count = self.request.data.get('count')
        product = Product.objects.get(id=id)
        product.quantity -= int(count)
        product.save()
        serializer.save(user=self.request.user)


@api_view(['DELETE'])
def product_detail(request, pk):
    try:
        category = UserProduct.objects.get(id=pk)
    except UserProduct.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    product = category.product
    product.quantity += category.count
    product.save()
    category.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

