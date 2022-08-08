from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, ReservationSerializer, RoomSerializer, ItemSerializer
from .models import User, Reservation, Room, Item

# Create your views here.

class UserView(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()

class ReservationView(viewsets.ModelViewSet):
  serializer_class = ReservationSerializer
  queryset = Reservation.objects.all()

class RoomView(viewsets.ModelViewSet):
  serializer_class = RoomSerializer
  queryset = Room.objects.all()

class ItemView(viewsets.ModelViewSet):
  serializer_class = ItemSerializer
  queryset = Item.objects.all()