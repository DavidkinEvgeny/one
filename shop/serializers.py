from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Category, Product



 

class ProductListSerializer(serializers.ModelSerializer):

    category = serializers.SlugRelatedField(slug_field='slug', read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'slug', 'name', 'image', 'category', 'price']


class CategoryListSerializer(serializers.ModelSerializer):

    products = ProductListSerializer(many=True, read_only=True)
    # products = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)

    class Meta:
        model = Category
        fields = '__all__'


class CategoryDetailSerializer(serializers.ModelSerializer):

    products = ProductListSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'


class ProductDetailSerializer(serializers.ModelSerializer):

    category = serializers.SlugRelatedField(slug_field='name', read_only=True)

    class Meta:
        model = Product
        exclude = ['available']
        # def get_image_url(self, obj):
        #     return obj.image.url