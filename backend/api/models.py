from django.db import models

# Create your models here.

class User(models.Model):
  name = models.CharField(max_length=50, unique=True)

  def __str__(self):
    return self.name

class Reservation(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
  reserved_date_from = models.DateField()
  reserved_date_to = models.DateField()

  def __str__(self):
    return str(self.user)

class Room(models.Model):
  name = models.CharField(max_length=50)

  def __str__(self):
    return self.name

class Item(models.Model):
  name = models.CharField(max_length=50)
  reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE, default=None, null=True, blank=True)
  room = models.ForeignKey(Room, on_delete=models.CASCADE, default=None)

  def __str__(self):
    return self.name