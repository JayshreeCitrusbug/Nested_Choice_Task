from email.headerregistry import Address
from django.db import models

# Create your models here.

class Sample(models.Model):
        # id = models.IntegerField(primary_key = True),
        name = models.CharField(max_length=150)
        age = models.IntegerField()
        address = models.TextField(max_length=500)
        # iso3 = models.CharField(max_length=200)
        # iso2 = models.CharField(max_length=200)
        # numeric_code = models.PositiveIntegerField()
        # phone_code = models.PositiveIntegerField()
        # capital = models.CharField(max_length=200)
        # currency = models.CharField(max_length=200)
        # currency_name = models.CharField(max_length=200)
        # tld = models.CharField(max_length=200)
        # native = models.CharField(max_length=200)
        # region = models.CharField(max_length=200)
        # subregion = models.CharField(max_length=200)
        # latitude = models.FloatField
        # longitude= models.FloatField
        # emoji = models.CharField(max_length=200)