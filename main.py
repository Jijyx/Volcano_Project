import pandas as pd
import numpy as np

# Récupère les données du fichier excel et les stock dans une variable de type DataFrame
Data = pd.read_excel('./Base_Donnees_Volcan.xlsx')

# Permet d'afficher les données d'une colonne voulue (ici Subregion)
print(Data.Subregion)

# Objectifs : 
# - Créer une fonction de tri par hauteur (croissant et décroissant)
# - Créer une fonction de tri par activité 
# - Créer une fonction de tri par continents
# - Créer une fonction de tri par pays
# - Créer une fonction de tri par type de volcan

# loc permet de sélectionner des données en fonction de leur label
print(Data.loc[Data['Volcano Name']=='Etna',:])

# tri par hauteur (les plus bas)
print(Data.sort_values(by='Elevation (m)', ascending=True)[0:10])

# tri par hauteur (les plus hauts)
print(Data.sort_values(by='Elevation (m)', ascending=False)[0:10])

# tri par continents
print(Data.sort_values(by='Region'))

# tri par pays
print(Data.sort_values(by='Country'))

# tri par type de volcan
print(Data.sort_values(by='Primary Volcano Type'))



# tri par activité (volcans dernièrement actifs)
# print(Data.sort_values(by='Last Known Eruption', ascending=False)[0:10])
# Fonction avec conditions pour BCE, CE, Unknown etc.
def tri_last_activity(Data):
    Data['Last Known Eruption'] = pd.to_datetime(Data['Last Known Eruption'], errors='coerce')
    Data = Data.sort_values(by='Last Known Eruption', ascending=False)
    return Data
