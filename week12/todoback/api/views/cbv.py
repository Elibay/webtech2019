from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import TaskList
from api.serializers import TaksListSerializer


class TasksList(APIView):

    def get(self, request):
        tasks = TaskList.objects.all()
        serializer = TaksListSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TaksListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TasksDetail(APIView):
    def get_object(self, pk):
        try:
            return TaskList.objects.get(id=pk)
        except Exception as e:
            raise Http404

    def get(self, request, pk):
        tasks = self.get_object(pk)
        serializer = TaksListSerializer(tasks)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        tasks = self.get_object(pk)
        serializer = TaksListSerializer(instance=tasks, data=request.body)
        if serializer.is_valid():
            serializer.save()  # update function in serializer class
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        tasks = self.get_object(pk)
        tasks.delete()
        return Response({}, status=status.HTTP_200_OK)



