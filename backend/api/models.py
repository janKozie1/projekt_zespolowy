from django.db import models
from datetime import date


class Roles(models.Model):
    name = models.CharField(max_length=50)


class Users(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    joined_at = models.DateField(default=date.today)
    email = models.CharField(max_length=50)
    id_role = models.ForeignKey(Roles, on_delete=models.CASCADE)


class Events(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    date = models.DateField(default=date.today)
    created_at = models.DateTimeField(auto_now=True)


class Gifts(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    store = models.CharField(max_length=50)


class UsersEvents(models.Model):
    id_user = models.ForeignKey(Users, on_delete=models.CASCADE)
    id_event = models.ForeignKey(Events, on_delete=models.CASCADE)


class Orders(models.Model):
    id_user = models.ForeignKey(Users, on_delete=models.CASCADE)
    id_gift = models.ForeignKey(Gifts, on_delete=models.CASCADE)
