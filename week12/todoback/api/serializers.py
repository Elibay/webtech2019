from rest_framework import serializers
from .models import *

class TaksListSerializer(serializers.ModelSerializer):

    class Meta:
        model = TaskList
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('id', 'name', 'status')

