import pandas as pd 
from bs4 import BeautifulSoup
import requests
import re

def recipe_info(url):
    recipe_search = requests.get(url).text
    soup_recipe = BeautifulSoup(recipe_search, "html.parser")
    try:
        ingr_soup = soup_recipe.find_all("span", class_ = 'ingredients-item-name')
    except: 
        ingr_soup = soup_recipe.find_all("span", class_ = "recipe-ingred_txt added")
    ## ingredients
    ing_list = []
    for i in ingr_soup:
        ing = i.text
        ing_clean = ing.strip()
        ing_list.append(ing_clean)
    return ing_list
def listToString(s):  
    str1 = " "  
    return (str1.join(s))

def ing_classifier(s):
    bin_bool = {}
    for key in bin_dict:
        bin_bool[key] = bool([ele for ele in bin_dict[key] if (ele in s)])
    return bin_bool 

bin_dict = {}
#meat
bin_dict['red_meat'] = ['beef', 'hamburger', 'steak', 'veal', 'bison', 'buffalo', 'lamb', 'mutton', 'goat', 'venison', 'deer', 'elk', 'caribou', 'moose']
bin_dict['porks'] = ['pork', 'boar', 'pig', 'bratwurst', 'italian sausage', 'ham']
bin_dict['poultry'] = ['chicken', 'turkey']
bin_dict['game'] = ['duck', 'pheasant', 'rabbit', 'quail', 'lapin', 'goose', 'grouse']
bin_dict['cured_meats'] = ['charcuterie', 'salumi','bacon', 'pancetta', 'mortadella', 'salami', 'pepperoni', 'pancetta', 'guanciale', 'capocollo', 'soppressata', 'pastrami', 'jamon iberico', 'bresaola', 'nduja', 'jamon serrano']
bin_dict['fish'] = ['salmon', 'tuna', 'trout', 'bass', 'seabass', 'snapper', 'cod', 'steelhead', 'yellowtail', 'hamachi', 'kampachi', 'amberjack', 'yellowjack', 'yellow jack', 'tilapia', 'mahi-mahi', 'flounder', 'halibut', 'swordfish', 'anchovy', 'sardine', 'catfish', 'grouper', 'haddock', 'mackerel', 'perch', 'whitefish', 'white fish', 'smelt']
bin_dict['shellfish'] = ['crab', 'lobster', 'crawfish', 'crayfish', 'langostino', 'shrimp', 'prawn', 'dungeness']
bin_dict['mollusk'] = ['oyster', 'cuttlefish', 'clam', 'scallop', 'octopus', 'squid', 'conch', 'mussel', 'periwinkle']
#herb
bin_dict['fresh_green'] = ['cilantro', 'basil', 'thai basil', 'mint', 'chervil', 'peppermint', 'borage', 'chamomile']
bin_dict['earthy_green'] = ['parsley', 'oregano', 'thyme', 'tarragon', 'marjoram', 'dill']
bin_dict['bitter_floral'] = ['sage', 'rosemary', 'lavender', 'bay leaf', 'pine', 'fir']
bin_dict['allium_spice'] = ['garlic', 'onion', 'scallion', 'chive', 'shallot', 'leek']
bin_dict['savory_brown'] = ['coriander', 'cumin', 'caraway', 'curry powder']
bin_dict['sharp_spicy'] = ['mustard', 'horseradish', 'szechuan pepper', 'wasabi']
bin_dict['perfumed_citrus_spicy'] = ['ginger', 'sorrel', 'galangal', 'turmeric', 'cardamom', 'saffron']
bin_dict['smokey_spicy'] = ['paprika', 'cayenne pepper', 'chili powder', 'chili pepper', 'ancho pepper', 'chili flakes', 'ancho chili', 'alleppo pepper', 'adobo', 'chipotle', 'chilpotle']
bin_dict['umami_spicy'] = ['white pepper', 'pink pepper', 'black pepper', 'green pepper', 'white peppercorn', 'pink peppercorn', 'black peppercorn', 'green peppercorn', 'soy sauce', 'olive']
bin_dict['baking_spice'] = ['cinnamon', 'clove', 'allspice', 'fenugreek', 'vanilla', 'nutmeg']
bin_dict['anise'] = ['anise', 'licorice', 'star anise', 'fennel', 'celery']
#cheese
bin_dict['fresh_salty'] = ['goat cheese', 'chevre', 'feta', 'cotilla', 'queso fresco', 'oaxaca', 'halloumi',  'fromage blanc', 'cottage cheese', 'sour cream', 'paneer']
bin_dict['delicate_nutty'] = ['brie', 'comte', 'comté', 'gruyere', 'havarti', 'mascarpone', 'mozzarella', 'creme fraiche', 'crème fraîche','ricotta', 'mascarpone', 'swiss cheese', 'emmental', 'raclette', 'colby', 'jack cheese', 'provolone', 'burrata', 'triple cream', 'morbier', 'camembert', 'boursin', 'fontina']
bin_dict['strong_firm'] = ['asiago', 'cheddar', 'gouda', 'manchego', 'parmesan', 'pecorino', 'cheshire', 'cantal', 'munster', 'parmagiano', 'iberico cheese', 'queso iberico', 'quexo iberico', 'idiazabal']
bin_dict['pungent'] = ['blue cheese', 'epoisses', 'époisses', 'gorgonzola', 'roquefort', 'stilton', 'taleggio', 'valdeon']
#prep
bin_dict['grilled_barbequed'] = ['grilled', 'grill', 'barbeque', 'bbq', 'barbequed', 'bbqd']
bin_dict['roasted'] = ['roast', 'roasted', 'bake', 'baked']
bin_dict['smoked'] = ['smoke', 'smoked']
bin_dict['poached_steamed'] = ['poach', 'poached', 'steam', 'steamed', 'boil', 'boiled']
bin_dict['sauteed_fried'] = ['sautee', 'sautée', 'sauteed', 'sautéed', 'fried', 'fry', 'sear', 'pan-fry', 'pan-fried', 'pan-sear', 'pan-seared', 'sear', 'seared', 'deep-fry']
#veg
bin_dict['green_veg'] = ['lettuce', 'cabbage', 'spinach', 'kale', 'watercress', 'brussels sprout', 'zucchini', 'okra', 'asparagus', 'artichoke', 'cucumber', 'collard', 'chard', 'green bean', 'endive', 'broccolini', 'avocado', 'romanesco', 'cauliflower']
bin_dict['root_veg'] = ['sweet potato', 'squash', 'pumpkin', 'carrot', 'turnip', 'beet', 'radish', 'parsnip', 'daikon', 'rutabaga', 'salsify', 'yam', 'yuca', 'yucca', 'butternut', 'gourd']
bin_dict['allium'] = ['onion', 'garlic', 'shallot', 'chive', 'scallion', 'leek', 'ramps']
bin_dict['nightshade'] = ['potato', 'bell pepper', 'tomato', 'eggplant', 'tomatillo']
bin_dict['hot_pepper'] = ['jalapeno', 'habanero', 'birdseye', 'thai chili', 'chili pepper']
bin_dict['bean'] = ['bean', 'chickpea', 'lentil', 'edamame', 'pea']
bin_dict['fungi'] = ['mushroom', 'chantarelle', 'shitake', 'crimini', 'cremini', 'oyster mushroom', 'porcini', 'maitake', 'portobello', 'champignon', 'boletus', 'hen of the woods', 'truffle']


df = pd.read_csv('binPairings.csv')

# t = recipe_info('https://www.allrecipes.com/recipe/18074/marinated-flank-steak/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%204')
# s = listToString(t)
# test = ing_classifier(s)


print(df.columns)