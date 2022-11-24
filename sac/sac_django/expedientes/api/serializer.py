from rest_framework.serializers import ModelSerializer
from expedientes.models import expediente


class ExpedienteSerializer(ModelSerializer):
    class Meta:
        model = expediente
        fields = ['id', 'title', 'asignTo', 'contratist',
                  'stage', 'state', 'description', 'dateStart', 'dateEnd']
