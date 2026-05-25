from rest_framework import viewsets
from .models import LugarTuristico, ServicioTuristico, Contacto, Comentario, Favorito
from .serializers import (
    LugarTuristicoSerializer,
    ServicioTuristicoSerializer,
    ContactoSerializer,
    ComentarioSerializer,
    FavoritoSerializer
)

class LugarTuristicoViewSet(viewsets.ModelViewSet):
    queryset = LugarTuristico.objects.all()
    serializer_class = LugarTuristicoSerializer

class ServicioTuristicoViewSet(viewsets.ModelViewSet):
    queryset = ServicioTuristico.objects.all()
    serializer_class = ServicioTuristicoSerializer

class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer

class ComentarioViewSet(viewsets.ModelViewSet):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer

class FavoritoViewSet(viewsets.ModelViewSet):
    queryset = Favorito.objects.all()
    serializer_class = FavoritoSerializer