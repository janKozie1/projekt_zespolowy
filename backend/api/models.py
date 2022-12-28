from django.db import models

class Example(models.Model):
    exampleString = models.CharField(max_length=50)
    exampleInt = models.IntegerField()

    def __str__(self):
        return self.name

class Users(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    joined_at = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=255)
    role_id = models.ForeignKey('Roles', on_delete=models.CASCADE)


class Roles(models.Model):
    name = models.CharField(max_length=255)


class UserEvents(models.Model):
    tittle = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner_id = models.ForeignKey('Users', on_delete=models.CASCADE)


class InvitedUsers(models.Model):
    id_users = models.ForeignKey('Users', on_delete=models.CASCADE)
    id_events = models.ForeignKey('UserEvents', on_delete=models.CASCADE)


class Store(models.Model):
    name = models.CharField(max_length=255)


class Gifts(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    store_id = models.ForeignKey('Store', on_delete=models.CASCADE)
    picture = models.CharField(max_length=255)
    id_category = models.ForeignKey('GiftsCategories', on_delete=models.CASCADE)


class GiftsCategories(models.Model):
    id_category = models.ForeignKey('CategoriesG', on_delete=models.CASCADE)
    id_gift = models.ForeignKey('Gifts', on_delete=models.CASCADE)


class CategoriesG(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)


class CartGifts(models.Model):
    id_cart = models.ForeignKey('ShoppingCart', on_delete=models.CASCADE)
    id_gift = models.ForeignKey('Gifts', on_delete=models.CASCADE)


class ShoppingCart(models.Model):
    id_event = models.ForeignKey('UserEvents', on_delete=models.CASCADE)
    due_date = models.DateTimeField()
    completed = models.BooleanField(default = False)


class EventCategories(models.Model):
    id_category = models.ForeignKey('CategoriesE', on_delete=models.CASCADE)
    id_event = models.ForeignKey('UserEvents', on_delete=models.CASCADE)


class CategoriesE(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
