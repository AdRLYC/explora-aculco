from rest_framework import serializers
from .models import LugarTuristico, ServicioTuristico, Contacto, Comentario, Favorito

class LugarTuristicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LugarTuristico
        fields = '__all__'

class ServicioTuristicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicioTuristico
        fields = '__all__'

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = '__all__'

class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = '__all__'

class FavoritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = '__all__'