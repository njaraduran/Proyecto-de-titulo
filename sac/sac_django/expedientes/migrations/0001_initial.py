# Generated by Django 4.0.6 on 2022-09-08 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='expediente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tittle', models.CharField(max_length=100)),
                ('creator', models.CharField(max_length=100)),
                ('date', models.DateField()),
            ],
        ),
    ]
