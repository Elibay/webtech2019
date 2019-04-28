# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.utils import json

from api.serializers import *
from api.models import *

@csrf_exempt
def task_list(request):
    if request.method == 'GET':
        tasks = TaskList.objects.all()
        serializer = TaksListSerializer(tasks, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        data = json.loads(request.body)
        serializer = TaksListSerializer(data=data)
        if serializer.is_valid():
            serializer.save()  # create function in serializer class
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)

@csrf_exempt
def task_list_detail(request, pk):
    try:
        task = TaskList.objects.get(id=pk)
    except Exception as e:
        return JsonResponse({'error': str(e.message)})

    if request.method == 'GET':
        serializer = TaksListSerializer(task)
        return JsonResponse(serializer.data, status=200)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        print "here"
        serializer = TaksListSerializer(instance=task, data=data)
        if serializer.is_valid():
            serializer.save()  # update function in serializer class
            return JsonResponse(serializer.data, status=200)

        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        task.delete()
        return JsonResponse({}, status=204)

@csrf_exempt
def task_list_detail_tasks(request, pk):
    try:
        all_tasks = Task.objects.filter(task_list__id=pk)
        serializer = TaskSerializer(all_tasks, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Exception as e:
        return JsonResponse({"error": e.message})

@csrf_exempt

def task_detail(request, pk):
    try:
        task = Task.objects.get(id=pk)
        serializer = TaskSerializer(task, many=False)
        return JsonResponse(serializer.data, safe=False)
    except Exception as e:
        return JsonResponse({"error": e.message})
