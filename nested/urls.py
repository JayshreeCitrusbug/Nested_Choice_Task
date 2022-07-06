from django.urls import path, include
from . import views   
urlpatterns = [
    # path('countires',views.CountryList.as_view(), name='all_countries_json'),
    path('country',views.CountryData.as_view(), name="country"),
    path('country/state',views.SatetData.as_view(), name="state"),
    path('country/state/city',views.CityData.as_view(),name='city'),
]