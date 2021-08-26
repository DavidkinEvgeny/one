from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response

from rest_framework import serializers

from .models import Category, Product
from rest_framework import views
from rest_framework import generics
# from rest_framework import permissions

from .serializers import (
    CategoryListSerializer, 
    CategoryDetailSerializer, 
    ProductListSerializer,
    ProductDetailSerializer
)


class CategoryListView(generics.ListAPIView):

    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer

    # def get(self, request):
    #     products = Category.objects.filter()
    #     serializer = CategoryListSerializer(products)
    #     return Response(serializer.data)


# class CategoryDetailView(generics.RetrieveAPIView):

#     queryset = Category.objects.all()
#     serializer_class = CategoryDetailSerializer


class CategoryDetailView(views.APIView):

    def get(self, request, pk):
        products = Category.objects.get(slug=pk)
        serializer = CategoryDetailSerializer(products)
        return Response(serializer.data)


class ProductListView(generics.ListAPIView):

    queryset = Product.objects.filter(available=True)
    serializer_class = ProductListSerializer


# class ProductListView(views.APIView):

#     def get(self, request):
#         products = Product.objects.filter(available=True)
#         serializer = ProductListSerializer(products, many=True)
#         return Response(serializer.data)


class ProductDetailView(views.APIView):

    def get(self, request, pk):
        products = Product.objects.get(slug=pk, available=True)
        serializer = ProductDetailSerializer(products)
        return Response(serializer.data)


def index(request):
    return render(request, 'index.html', {})


# def product_list(request, category_slug=None):
#     category = None
#     categories = Category.objects.all()
#     products = Product.objects.filter(available=True)
#     if category_slug:
#         category = get_object_or_404(Category, slug=category_slug)
#         products = products.filter(category=category)
#     return render(
#         request, 
#         'shop/product/list.html',
#         {'category': category, 'categories': categories, 'products': products}
#     )


# def product_detail(request, id, slug):
#     product = get_object_or_404(Product, id=id, slug=slug, available=True)
#     return render(
#         request,
#         'shop/product/detail.html',
#         {'product': product}
#     )

