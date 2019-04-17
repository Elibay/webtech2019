# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from .serializers import *
from .models import *

def task_list(request):
    tasks = TaskList.objects.all()
    serializer = TaksListSerializer(tasks, many=True)
    return JsonResponse(serializer.data, safe=False)

def task_list_detail(request, pk):
    print "here"
    try:
        task = TaskList.objects.get(id=pk)
        return JsonResponse(task.to_json(), safe=False)
    except Exception as e:
        return JsonResponse({"error": e.message})

def task_list_detail_tasks(request, pk):
    try:
        all_tasks = TaskList.objects.all().exclude(id=pk)
        task = TaskList.objects.get(id=pk)
        serializer = TaksListSerializer(all_tasks, many=True)
        return JsonResponse({'task': task.to_json(), 'others': serializer.data})
    except Exception as e:
        return JsonResponse({"error": e.message})

def task_detail(request, pk):
    try:
        task = Task.objects.get(id=pk)
        serializer = TaskSerializer(task, many=False)
        return JsonResponse(serializer.data, safe=False)
    except Exception as e:
        return JsonResponse({"error": e.message})
