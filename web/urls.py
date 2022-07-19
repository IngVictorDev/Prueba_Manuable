from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt

from web.views.inicio import inicio
from web.services.save_product import save_product
from web.services.get_products import get_products
app_name = 'web'

urlpatterns = [
	path('inicio/',inicio, name='inicio'),
	path('inicio/services/save_product',save_product,name='save_product'),
	path('inicio/services/get_products',get_products,name='get_products')
]