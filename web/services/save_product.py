from django.shortcuts import render, get_object_or_404
from django.http import *
from web.models import *
import json

def save_product(request):
	result = {}
	data = json.loads(request.POST['data'])
	if 'id_product' in request.POST:
		## significa que actualizaremos los datos
		try:
			id_product = request.POST['id_product']
			producto = Products.objects.get(id=int(id_product))
		except Exception as i:
			print(i)

		if 'delete' in request.POST:
			## actualizamos el activo a false para eliminar registro
			producto.activo = False
		else:
			producto.name   		= data['name_prod']
			producto.price  		= data['price_prod']
			producto.sku    		= data['sku_prod']
			producto.is_seasonal	= data['estacional_prod']
			producto.quantity 		= data['quantity_prod']
			producto.category_id 	= int(data['categorias_prod'])
		producto.save()
	else:		
		try:
			new_product = Products(
				name=data['name_prod'],
				price=data['price_prod'],
				sku=data['sku_prod'],
				is_seasonal=data['estacional_prod'],
				quantity = data['quantity_prod'],
				category_id = int(data['categorias_prod']),
				activo = True
			)
			new_product.save()
		except Exception as e:
			print(e)
			result['error'] = 'Error to save product'
			
	return HttpResponse(json.dumps(result), content_type="application/json")
