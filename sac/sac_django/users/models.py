from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # # username = models.EmailField(unique=True, null=True)
    # # name = models.CharField(max_length=200, null=True)
    # # bio = models.TextField(null=True)

    cargo = models.CharField(max_length=75)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    # pass
