from django.urls import include, path
from rest_framework import routers
from . import views


# router = routers.DefaultRouter()
# router.register(r'category', views.CategoryViewSet, basename='Category')
# # router.register(r'product', views.ProductSerializer, basename='Product')

urlpatterns = [
    path('category/', views.CategoryListView.as_view()),
    path('category/<slug:pk>/', views.CategoryDetailView.as_view()),
    path('product/', views.ProductListView.as_view()),
    path('product/<slug:pk>/', views.ProductDetailView.as_view()),
    path('', views.index),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('', views.product_list, name='product_list'),
    # path('<slug:category_slug>/', views.product_list, name='product_list_by_category'),
    # path('<int:id>/<slug:slug>/', views.product_detail, name='product_detail'),
]
