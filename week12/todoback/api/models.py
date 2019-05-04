# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.utils.timezone import now

from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class List(models.Model):
    name = models.CharField(max_length=255)
    created_by = models.ForeignKey(User)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)


class Task(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=now, blank=True)
    due_on = models.DateTimeField(default=now, blank=True)
    status = models.CharField(max_length=255)
    task_list = models.ForeignKey(List, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at,
            'due_on': self.due_on,
            'status': self.status,
        }