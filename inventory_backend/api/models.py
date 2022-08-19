from statistics import mode
from django.db import models

# Create your models here.

class User(models.Model):
  name = models.CharField(max_length=50, unique=True)

  def __str__(self):
    return self.name

class Reservation(models.Model):
  user_id = models.CharField(max_length=50, default='1')
  item_id = models.CharField(max_length=50, default='1')
  reserved_date_from = models.CharField(max_length=50)
  reserved_date_to = models.CharField(max_length=50)

  def __str__(self):
    return str(self.user)
    
class Item(models.Model):
  name = models.CharField(max_length=50)
  room = models.CharField(max_length=50)
  def __str__(self):
    return self.name
