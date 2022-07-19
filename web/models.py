from django.db import models

	# Create your models here.
class Products(models.Model):
	name     		= models.CharField(max_length=100)
	price	        = models.IntegerField(default=0)
	sku     		= models.CharField(max_length=50)
	is_seasonal		= models.BooleanField(null=False)
	image			= models.CharField(max_length=100,null=True)
	quantity		= models.CharField(max_length=20)
	#category		= models.CharField(max_length=20)
	category      	= models.ForeignKey('CatalogoCategoria',blank=True,null=True,on_delete=models.CASCADE)
	activo			= models.BooleanField(null=False,default=True)
	class Meta:
		app_label           = 'web'
		verbose_name        = 'Product'
		verbose_name_plural = 'Products'

class CatalogoCategoria(models.Model):
	categoria 		= models.CharField(max_length=100)
	activo			= models.BooleanField(null=False,default=True)
	class Meta:
		app_label           = 'web'
		verbose_name        = 'CatalogoCategoria'
		verbose_name_plural = 'CatalogoCategorias'