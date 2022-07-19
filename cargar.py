from web.models import *
import csv
def cargar(ruta):
	try:
		############# leer archivo csv ##########
		registros = []
		with open(ruta, newline='') as File:
			reader = csv.reader(File)
			for row in reader:
				
				if row[4] == 'false':
					seasonal = False
				else:
					seasonal = True
				category = CatalogoCategoria.objects.get(categoria=row[7])
				registros.append(Products(name=row[1],price=row[2],sku=row[3],is_seasonal=seasonal,image=row[5],quantity = row[6],category_id=category.id))
		Products.objects.bulk_create(registros)
		###########################################
	except Exception as e:
		print(e)
cargar('/home/userhta/Downloads/product_list (1).csv')