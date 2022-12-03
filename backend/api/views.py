from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Example
from .serializers import ExampleSerializer

class CatViewSet(viewsets.ModelViewSet):
    queryset = Example.objects.all()
    serializer_class = ExampleSerializer
    def post(self, request, *args, **kwargslf):
        data = {
            'string': request.data.get('exampleString'), 
            'number': request.data.get('exampleInt')
        }
        serializer = ExampleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)