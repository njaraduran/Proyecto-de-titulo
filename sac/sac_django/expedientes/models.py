from django.db import models


class expediente(models.Model):
    tittle = models.CharField(max_length=100)
    creator = models.CharField(max_length=100)
    date = models.DateField()
