# Generated by Django 4.0.6 on 2022-09-11 04:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('expedientes', '0003_remove_expediente_date_expediente_asignto_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expediente',
            name='creator',
        ),
    ]
