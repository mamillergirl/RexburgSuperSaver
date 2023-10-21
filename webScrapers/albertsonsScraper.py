# %%
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import string
import re
from datetime import datetime
from selenium.webdriver.common.action_chains import ActionChains
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# %%
url = "https://www.albertsons.com/shop/deals/sale-prices.html"
driver =  webdriver.Chrome()
driver.get(url)

WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.XPATH, '//*[@id="onboardingCloseButton"]')))

# %%
close_button1 = driver.find_element(By.XPATH, '//*[@id="onboardingCloseButton"]')

close_button2 = driver.find_element(By.XPATH, '//*[@id="onetrust-close-btn-container"]/button')

ActionChains(driver).move_to_element(close_button1).click().perform()

ActionChains(driver).move_to_element(close_button2).click().perform()

# %%
click_count = 10

WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id=\"search-grid_0\"]/div[1]/div[4]/button')))

for _ in range(click_count):
    button = driver.find_element(By.XPATH, "//*[@id=\"search-grid_0\"]/div[1]/div[4]/button")
    button.click()
    time.sleep(2)


# %%

# Grabs the deals
element_list = driver.find_elements(By.XPATH, '//*[@id="search-grid_0"]/div/div[1]/div/product-item-v2')


# %%
ratings = []
discounted_prices = []
original_prices = []
names = []
image_urls = []
descriptions = []  # Initialize with None
end_dates = []


for item in element_list:
    item_text = item.text
    lines = item_text.split('\n')

    if len(lines) > 6:
        if len(lines) > 7:
            # Extract the components
            rating = lines[0]
            discounted_price = lines[1]
            original_price = lines[4]
            name = lines[5]

        elif len(lines) == 6:
            rating = lines[0]
            discounted_price = lines[1]
            original_price = None
            name = lines[4]

        image_url = item.find_element(By.TAG_NAME, 'img').get_attribute('data-src')
        # Add "https://" to the beginning of the URL
        image_url = "https://" + image_url

        description = None
        end_date = None

        image_urls.append(image_url)
        ratings.append(rating)
        discounted_prices.append(discounted_price)
        names.append(name)
        original_prices.append(original_price)
        descriptions.append(description)
        end_dates.append(end_date)


# %%
# Builds scraped data to df
albertsons_df = pd.DataFrame({
    'rating': ratings,
    'discountedPrice': discounted_prices,
    'originalPrice': original_prices,
    'name': names,
    'image_url': image_urls
})

albertsons_df = pd.DataFrame({
    'name': names,
    'discountPrice': discounted_prices,
    'originalPrice': original_prices,
    'imageUrl': image_urls,
    'descriptions': descriptions,
    'endDate': end_dates
})

# %%
"""Clean the data!!"""

albertsons_df = albertsons_df.replace({None: np.nan})

albertsons_df = albertsons_df[albertsons_df['originalPrice'] != 'Original Price']
albertsons_df['discountedPrice'] = albertsons_df['discountedPrice'].apply(lambda x: float(x.replace('$', '')) if x is not None else None)
albertsons_df['originalPrice'] = albertsons_df['originalPrice'].apply(lambda x: float(x.replace('$', '')) if x is not None else None)


# %% 
# Exporting as json

albertsons_df.to_json('albertsons_df.json', orient='records', lines=True)


# %%
