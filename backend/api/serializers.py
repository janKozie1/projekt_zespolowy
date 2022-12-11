from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Example
     

class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Example
        fields = ['exampleString', 'exampleInt']