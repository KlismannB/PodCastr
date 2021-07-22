import requests

url = 'https://open.spotify.com/show/6gfgBRVqizNZsPMKPY54Bd'

r = requests.get(url);

print(r.status_code)
print(r.json())