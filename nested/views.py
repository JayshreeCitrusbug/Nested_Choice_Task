from re import template
from select import select
from this import s
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views import *
import urllib.request
import json
from json import dumps
# import pandas as pd
# Create your views here.




# class CountryList(View):
#     # template_name = "index.html"
#     def get(self, request):

#         url = 'http://127.0.0.1:8000/static/jsondata/countries.json/'
#         with urllib.request.urlopen(f"{url}") as u:
#             data = json.loads(u.read().decode())
#             # print(data)
#         return JsonResponse(data=data, safe=False)


class CountryData(View):
    def get(self, request):

        url = 'http://127.0.0.1:8000/static/jsondata/countries.json/'
        with urllib.request.urlopen(f"{url}") as u:
            data = json.loads(u.read().decode())
        return render(request, 'index.html', {'country': data})



class SatetData(View):

    def get(self, request):
        country_id = request.GET.get('CountryId',"")
       
        state_data = open('nested\static\jsondata\states.json', "r", encoding="utf8")
        json_statesdata = json.load(state_data)
        
        selectedCountryData = [stateData for stateData in json_statesdata if stateData['country_id'] == int(country_id)]
        return JsonResponse(data=selectedCountryData, safe=False)
      

class CityData(View):

    def get(self,request):
        state_id = request.GET.get('StateId',"")
           
        city_data = open('nested\static\jsondata\cities.json', "r", encoding="utf8")
        json_citydata = json.load(city_data)
        
        SelectedStateData = [cityData for cityData in json_citydata if cityData['state_id'] == int(state_id)]
        return JsonResponse(data=SelectedStateData, safe=False)
