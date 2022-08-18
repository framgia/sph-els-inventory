from django.contrib import admin
from .models import User, Reservation, Item

class UserAdmin(admin.ModelAdmin):
  list_display = (['name'])

class ReservationAdmin(admin.ModelAdmin):
  list_display = ('user', 'reserved_date_from', 'reserved_date_to')


class ItemAdmin(admin.ModelAdmin):
   list_display = ('name', 'reservation', 'room')

# Register your models here.

admin.site.register(User, UserAdmin)
admin.site.register(Reservation, ReservationAdmin)

admin.site.register(Item, ItemAdmin)
