from django.db import models
import datetime


class expediente(models.Model):
    title = models.CharField(max_length=100)
    # creator = models.CharField(default=' ', max_length=100)
    asignTo = models.CharField(default=' ', max_length=101)
    contratist = models.CharField(default=' ', max_length=100)
    stage = models.CharField(default=' ', max_length=100)
    state = models.CharField(default=' ', max_length=100)
    description = models.CharField(default=' ', max_length=100)
