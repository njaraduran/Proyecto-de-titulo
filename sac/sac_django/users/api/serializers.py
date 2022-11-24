from rest_framework import serializers
from users.models import User


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name',
                  'last_name', 'cargo', 'password', 'is_active', 'is_staff']
