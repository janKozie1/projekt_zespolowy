# Generated by Django 4.1.3 on 2022-12-07 22:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Example',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exampleString', models.CharField(max_length=50)),
                ('exampleInt', models.IntegerField()),
            ],
        ),
    ]
