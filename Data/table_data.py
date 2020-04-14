from bs4 import BeautifulSoup
import pandas as pd 

file_path = "pairing.html"

with open(file_path, "r") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

category_soup = soup.find_all("td", class_ = "column-type")
category = []
for cat in category_soup:
    category.append(cat.text)

beverage_soup = soup.find_all("td", class_ = "column-varietal")
beverage = []
for bev in beverage_soup:
    beverage.append(bev.text)

food_soup = soup.find_all("td", class_ = "column-food")
food = []
for f in food_soup:
    food.append(f.text)

star_soup = soup.find_all("td", class_ = "column-stars")
ratings = []

for rating in star_soup:
    full_star_count = len(rating.find_all("i", class_ = "fa-star"))*1
    half_star_count = len(rating.find_all("i", class_ = "fa-star-half"))* 0.5
    star_count = full_star_count + half_star_count
    ratings.append(star_count)


data = [category,beverage, food, ratings]
df = pd.DataFrame(data)
df = df.T
df.columns = ["BeverageCategory", 'Beverage', 'Food', "Rating"]
df.to_csv("winePairing.csv")



