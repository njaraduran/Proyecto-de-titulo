from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from expedientes.models import expediente
from expedientes.api.serializer import ExpedienteSerializer


class ExpedienteApiViewSet(ModelViewSet):
    permission_classes_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ExpedienteSerializer
    queryset = expediente.objects.all()
