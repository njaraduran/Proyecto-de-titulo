from rest_framework.routers import DefaultRouter
from expedientes.api.views import ExpedienteApiViewSet

router_expediente = DefaultRouter()

router_expediente.register(
    prefix='expedientes', basename='expedientes', viewset=ExpedienteApiViewSet
)
