from rest_framework import serializers
from .models import *

class TaksListSerializer(serializers.Serializer):

    class Meta:
        model = TaskList
        fields = '__all__'

class TaskSerializer(serializers.Serializer):

    class Meta:
        model = Task
        fields = '__all__'

