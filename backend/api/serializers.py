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


class CategoryGSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriesG
        fields = ['name', 'description']


class GiftsCategoriesSerializer(serializers.ModelSerializer):
    category = CategoryGSerializer(read_only=True)

    class Meta:
        model = GiftsCategories
        fields = ['id_category', 'category']


class GiftsSerializer(serializers.ModelSerializer):
    id_gift = serializers.IntegerField(source='id')
    categories = GiftsCategoriesSerializer(many=True, read_only=True)

    class Meta:
        model = Gifts
        fields = ['id_gift', 'name', 'description', 'price', 'picture', 'store_id', 'categories']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['categories'] = GiftsCategoriesSerializer(instance.giftscategories_set.all(), many=True).data
        return data


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

class IncomingGiftsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    id_event = serializers.IntegerField()
    due_date = serializers.DateTimeField()
    completed = serializers.BooleanField()
    tittle = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    date = serializers.DateTimeField()
    created_at = serializers.DateTimeField()
    owner_id = serializers.IntegerField()

class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendList
        fields = ('user', 'friend', 'status', 'timestamp')

class FriendListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'name', 'surname', 'email')

