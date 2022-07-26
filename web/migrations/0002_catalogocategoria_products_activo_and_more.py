# Generated by Django 4.0.6 on 2022-07-18 21:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CatalogoCategoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categoria', models.CharField(max_length=100)),
                ('activo', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'CatalogoCategoria',
                'verbose_name_plural': 'CatalogoCategorias',
            },
        ),
        migrations.AddField(
            model_name='products',
            name='activo',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='web.catalogocategoria'),
        ),
    ]
