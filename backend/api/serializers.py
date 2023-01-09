from rest_framework import serializers
from .models import *


class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Example
        fields = ['id', 'exampleString', 'exampleInt']


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'name', 'surname', 'joined_at', 'email', 'role_id', 'preferred_method_id',
                  'billing_name', 'billing_address', 'billing_postcode', 'billing_city']


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roles
        fields = ['id', 'name']


class UserEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEvents
        fields = ['id', 'tittle', 'description', 'date', 'created_at', 'owner_id']


class InvitedUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvitedUsers
        fields = ['id', 'id_users', 'id_events']


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ['id', 'name']


class GiftsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gifts
        fields = ['id', 'name', 'price', 'store_id', 'picture']


class GiftsCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GiftsCategories
        fields = ['id', 'id_category', 'id_gift']


class CategoriesGSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriesG
        fields = ['id', 'name', 'description']


class CartGiftsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartGifts
        fields = ['id', 'id_cart', 'id_gift']


class ShoppingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = ['id', 'id_event', 'due_date', 'completed']


class EventCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventCategories
        fields = ['id', 'id_category', 'id_event']


class CategoriesESerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriesE
        fields = ['id', 'name', 'description']
