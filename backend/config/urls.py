"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.shortcuts import render
from django.urls import path, include
from rest_framework import routers
from api import views
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

router = routers.DefaultRouter()
# TODO I think we can attach authentication views created in issue #9 by @VV1S here
# router.register(r'auth/login', views.login_view, name='api-login')
# router.register(r'auth/register', views.logout_view, name='api-logout')
router.register(r'dashboard', views.DashboardViewSet, basename='dashboard')
router.register(r'products', views.ProductsViewSet, basename='products')
router.register(r'cart', views.CartViewSet, basename='cart')
router.register(r'profile', views.ProfileViewSet, basename='profile')
router.register(r'calendar', views.CalendarViewSet, basename='calendar')
router.register(r'gift-discover', views.GiftDiscover, basename='gift-discover')
router.register(r'incoming-gifts', views.IncomingGifts, basename='incoming-gifts')


urlpatterns = [
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path('admin/', admin.site.urls),
    path('login/', views.login_view, name='api-login'),
    path('logout/', views.logout_view, name='api-logout'),
    path('session/', views.session_view, name='api-session'),
    path('whoami/', views.whoami_view, name='api-whoami'),
    # OpenAPI 3 documentation with Swagger UI
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "docs/",
        SpectacularSwaggerView.as_view(
            template_name="swagger-ui.html", url_name="schema"
        ),
        name="swagger-ui",
    ),
]
