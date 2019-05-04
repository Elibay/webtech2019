from django.http import Http404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Post
from api.serializers import PostSerializer


class PostList(APIView):

    def get(self, request):
        categories = Post.objects.all()
        serializer = PostSerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PostDetail(APIView):
    def get_object(self, pk):
        try:
            return Post.objects.get(id=pk)
        except Exception as e:
            raise Http404

    def get(self, request, pk):
        tasks = self.get_object(pk)
        serializer = PostSerializer(tasks)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        tasks = self.get_object(pk)
        serializer = PostSerializer(instance=tasks, data=request.body)
        if serializer.is_valid():
            serializer.save()  # update function in serializer class
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        tasks = self.get_object(pk)
        tasks.delete()
        return Response({}, status=status.HTTP_200_OK)


@api_view(['POST'])
def likePost(request, pk):
    try:
        post = Post.objects.get(id=pk)
    except Post.DoesNotExist:
        return Response({}, status=status.HTTP_404_NOT_FOUND)
    post.like_count += 1
    post.save()
    serilizer = PostSerializer(data=post)
    return Response(serilizer.data, status=status.HTTP_200_OK)



