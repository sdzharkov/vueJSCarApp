import requests
from bs4 import BeautifulSoup

url = "https://www.gasbuddy.com/USA"
r = requests.get(url)

soup = BeautifulSoup(r.content)

links = soup.find_all("div", "row")

print(links)