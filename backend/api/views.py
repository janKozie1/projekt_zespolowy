from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *


class RoleViewSet(viewsets.ModelViewSet):
    queryset = Roles.objects.all().order_by('id')
    serializer_class = RoleSerializer

    def post(self, request, *args, **kwargslf):
        data = {
            'name': request.data.get('name')
        }
        serializer = RoleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
