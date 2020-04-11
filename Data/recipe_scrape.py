import pandas as pd 
from bs4 import BeautifulSoup
from selenium import webdriver
import selenium.common.exceptions 
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import selenium.webdriver.support as dsupport 

filepath = "recipeScrape.html"
df = pd.read_csv("df_main.csv")
foods = df['food'].unique()


driver = webdriver.Firefox()


recipe_facts = {}
count = 300


for food in foods[1501:]:
    count += 1
    print(count)
    recipe = food.replace(" ", "%20") 
    url = f"https://www.allrecipes.com/search/results/?wt={recipe}&sort=re"
    driver.get(url)
    try: 
        recipeLink = driver.find_element_by_xpath("//*[@id='fixedGridSection']/article[2]/div[2]/h3/a/span")
        recipeLink.click()
    except selenium.common.exceptions.NoSuchElementException:
        try:
            recipeLink = driver.find_element_by_xpath("//*[@id='fixedGridSection']/article[3]/div[2]/h3/a/span")
            recipeLink.click()
        except:
            recipe_facts[food] = 'no recipe match found'
            continue
    #WebDriverWait(driver, 2)
    try:
        recipe_facts[food] = driver.find_element_by_class_name("nutrition-summary-facts").text
    except:
        try:
            recipe_facts[food] = driver.find_element_by_xpath("/html/body/div[1]/div/main/div[1]/div[2]/div[1]/div[2]/div[2]/section[2]/div/div[2]").text
        except: 
            recipe_facts[food] = 'no recipe match found'
            continue
        
driver.close()
rnames = recipe_facts.keys()
rvals = recipe_facts.values()
mainDF = pd.DataFrame(rnames)
mainDF['nutrition'] = rvals
mainDF.to_csv("AllRecipe_df10.csv")
print(mainDF)






#driver.find_element_by_id("searchText").send_keys("Duck \n")
#driver.find_element_by_id("searchText").send_keys(Keys.ENTER)
#WebDriverWait(driver, 10).until(EC.url_changes("https://www.allrecipes.com/search/results/?wt=duck&sort=re"))
#html = driver.page_source

#try: 
#    recipeLink = driver.find_element_by_xpath("//*[@id='fixedGridSection']/article[2]/div[2]/h3/a/span")
#    recipeLink.click()
#except:
#    recipeLink = driver.find_element_by_xpath("//*[@id='fixedGridSection']/article[3]/div[2]/h3/a/span")
#    recipeLink.click()

#WebDriverWait(driver, 10).until(EC.url_changes(url))
#driver.find_element_by_class_name("nutrition-summary-facts").text





#driver.close()

#with open(filepath, "w+") as f:
 #   f.write(html)
