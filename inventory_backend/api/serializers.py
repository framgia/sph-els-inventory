from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import User, Reservation, Room, Item

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = (['name'])

class ReservationSerializer(serializers.ModelSerializer):
  user= serializers.SlugRelatedField(
     ## many = True,
     ##read_only = False,
    slug_field='name',
    queryset= User.objects.all()

  )
  class Meta:
    model = Reservation
    fields = ('user', 'reserved_date_from', 'reserved_date_to') # '__all__'

class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = (['name'])

class ItemSerializer(serializers.ModelSerializer):
  room= serializers.SlugRelatedField(
    ## many = True,
    ##read_only = False,
    slug_field='name',
    queryset=Room.objects.all()

  )   
 
  class Meta:
     model = Item
     fields = ('name', 'reservation', 'room')
