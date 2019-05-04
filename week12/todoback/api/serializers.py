from django.contrib.auth.models import User
from rest_framework import serializers
from .models import List, Task


class ListSerializer(serializers.ModelSerializer):

    class Meta:
        model = List
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    # created_at = serializers.DateTimeField(required=False)
    # due_on = serializers.DateTimeField(required=False)
    class Meta:
        model = Task
        fields = ('id', 'name', 'status', 'task_list')
        # fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)
