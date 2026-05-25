from django.db import models


class LugarTuristico(models.Model):
    nombre = models.CharField(max_length=100)
    categoria = models.CharField(max_length=80)
    descripcion = models.TextField()
    ubicacion = models.CharField(max_length=150)
    imagen = models.ImageField(upload_to='lugares/', blank=True, null=True)

    def __str__(self):
        return self.nombre


class ServicioTuristico(models.Model):
    servicio = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.CharField(max_length=50)
    contacto = models.CharField(max_length=100)

    def __str__(self):
        return self.servicio


class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField()
    telefono = models.CharField(max_length=20)
    fecha_visita = models.DateField()
    lugar_interes = models.CharField(max_length=100)
    mensaje = models.TextField()

    def __str__(self):
        return self.nombre


class Comentario(models.Model):
    nombre = models.CharField(max_length=100)
    comentario = models.TextField()
    calificacion = models.IntegerField(default=5)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre


class Favorito(models.Model):
    lugar = models.ForeignKey(LugarTuristico, on_delete=models.CASCADE)
    nombre_usuario = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nombre_usuario} - {self.lugar.nombre}"
