# Generated by Django 4.1.3 on 2023-01-09 20:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_paymentmethods_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paymentmethods',
            old_name='URL',
            new_name='image_url',
        ),
    ]