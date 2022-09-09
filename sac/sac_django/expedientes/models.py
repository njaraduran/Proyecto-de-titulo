from django.db import models


class expediente(models.Model):
    title = models.CharField(max_length=100)
    creator = models.CharField(max_length=100)
    date = models.DateField()
