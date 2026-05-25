from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LugarTuristicoViewSet, ServicioTuristicoViewSet, ComentarioViewSet, ContactoViewSet

router = DefaultRouter()
router.register('lugares', LugarTuristicoViewSet)
router.register('servicios', ServicioTuristicoViewSet)
router.register('comentarios', ComentarioViewSet)
router.register('contactos', ContactoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]