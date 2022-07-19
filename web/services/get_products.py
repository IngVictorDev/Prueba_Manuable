from django.shortcuts import render, get_object_or_404
from django.http import *
from web.models import *
import json

def get_products(request):
	result = {}
	try:
		products = Products.objects.filter(activo=True)
		lista_productos = {}
		for product in products:
			seasonal = 'YES' if product.is_seasonal else 'NO'
			lista_productos[str(product.id)] = {
				'name':product.name,
				'price':product.price,
				'sku':product.sku,
				'seasonal':seasonal,
				'quantity':product.quantity,
				'category':product.category.categoria,
				'category_id':product.category.id
			}
		result['products'] = lista_productos
	except Exception as e:
		result['error'] = 'error on get products'
		print(e)
	return HttpResponse(json.dumps(result), content_type="application/json")