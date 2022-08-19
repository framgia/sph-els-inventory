from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import User, Reservation,  Item

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = (['id','name'])

class ReservationSerializer(serializers.ModelSerializer):

  class Meta:
    model = Reservation
    fields = ('id','user_id', 'item_id', 'reserved_date_from', 'reserved_date_to') 
    
class ItemSerializer(serializers.ModelSerializer):
   class Meta:
     model = Item
     fields = ('id','name','room')

