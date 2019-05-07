# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.utils.timezone import now

from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    created_by = models.ForeignKey(User)