from django.contrib import admin
from .models import LugarTuristico, ServicioTuristico, Comentario, Contacto

admin.site.register(LugarTuristico)
admin.site.register(ServicioTuristico)
admin.site.register(Comentario)
admin.site.register(Contacto)