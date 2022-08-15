from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import User, Reservation, Room, Item

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = (['id','name'])

class ReservationSerializer(serializers.ModelSerializer):
  user= serializers.SlugRelatedField(
    
    slug_field='name',
    queryset= User.objects.all()

  )
  class Meta:
    model = Reservation
    fields = ('id','user', 'reserved_date_from', 'reserved_date_to') # '__all__'

class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = (['id','name'])

class ItemSerializer(serializers.ModelSerializer):
  room= serializers.SlugRelatedField(
   
    slug_field='name',
    queryset=Room.objects.all()

  )   
 
  class Meta:
     model = Item
     fields = ('id','name', 'reservation', 'room')
