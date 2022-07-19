from django.shortcuts import redirect, render, get_object_or_404
from django.template import RequestContext
from django.http import *
from web.models import *

def inicio(request):
	context = {}
	context['categories'] = CatalogoCategoria.objects.filter(activo=True)
	
	return render(request, 'web/inicio.html', context)