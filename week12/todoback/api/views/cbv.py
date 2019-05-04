from django.http import Http404, HttpResponseNotAllowed
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import json
from api.serializers import *


class TaskList(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        tasks = List.objects.all()
        serializer = ListSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class Detail(APIView):
    permission_classes = (IsAuthenticated, )

    @staticmethod
    def get_object(request, pk):
        try:
            objc = List.objects.get(id=pk)
            # if request.user != objc.created_by:
            #     raise HttpResponseNotAllowed
            return objc
        except Exception:
            raise Http404

    def get(self, request, pk):
        todo = self.get_object(request, pk)
        tasks = Task.objects.filter(task_list__id=pk)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        todo = self.get_object(request, pk)
        Json = json.loads(request.body)
        serializer = TaskSerializer(data=Json)
        # print request.body
        # serializer = TaskSerializer(data=request.body)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        todo = self.get_object(request, pk)
        todo.delete()
        return Response({}, status=status.HTTP_200_OK)