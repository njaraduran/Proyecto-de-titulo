from django.urls import path
from rest_framework.routers import DefaultRouter
from users.api.views import userApiViewSet, UserView

router_user = DefaultRouter()

router_user.register(
    prefix='users', basename='users', viewset=userApiViewSet
)


urlpatterns = [
    path('auth/me/', UserView.as_view())
]
