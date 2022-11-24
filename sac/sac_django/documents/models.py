from django.db import models


class documents(models.Model):
    tittle = models.CharField(max_length=100)
    creator = models.CharField(max_length=100)
    date = models.DateField()
    file = models.FileField(upload_to='documents')
