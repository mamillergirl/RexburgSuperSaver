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
url = "https://www.ecomadviewer.com/broulims-rexburg/items"
driver =  webdriver.Chrome()
driver.get(url)

# %%
# WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.XPATH, '//*[@id=\"app\"]/div[7]/div/div/div[2]/form/div[3]/div[4]/button[2]')))

# Find the element representing the close button
close_button = driver.find_element(By.XPATH, "//*[@id=\"app\"]/div[7]/div/div/div[2]/form/div[3]/div[4]/button[2]")

# Perform a click action on the continue as guest button
ActionChains(driver).move_to_element(close_button).click().perform()

# %%
def scroll_to_load_more(driver):
    last_height = 0
    while True:
        # Scroll down to the bottom of the page
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        # Wait for a short time to allow new content to load
        time.sleep(1)  # You may need to adjust the waiting time

        # Calculate the new height of the page
        new_height = driver.execute_script("return document.body.scrollHeight")

        # If the page height hasn't increased, it means you've reached the end of the content
        if new_height == last_height:
            break

        last_height = new_height

# Scroll down to load more content
scroll_to_load_more(driver)



# %%
parent_element = driver.find_element(By.XPATH, '//*[@id="app"]/div[6]/div/main/div/div/div/div/div')

# Find all elements with the specified class within the parent element
nested_elements = parent_element.find_elements(By.CLASS_NAME, "v-card.v-sheet.theme--light.elevation-1")


# %%

# Initialize lists to store extracted information
names = []
discount_prices = []
end_dates = []
descriptions = []
original_prices = []
imageUrl = []


# Extract information from the data
for item in nested_elements:
    item_text = item.text
    lines = item_text.split('\n')
    if (len(lines) > 3):
        if (len(lines) >= 4):
            name = lines[len(lines)-3]
            discount_price = lines[len(lines)-2]
            end_date = lines[len(lines)-1]
            if lines[0].startswith('$'):
                original_price = lines[0]
                description = lines[3]
            elif lines[1].startswith('$'):
                original_price = lines[1]
                description = lines[0]
            else:
                original_price = None
                description = lines[0]
        if (len(lines) == 3):
            name = lines[len(lines)-3]
            discount_price = lines[len(lines)-2]
            end_date = lines[len(lines)-1]
            original_price = None
            description = None

        """Grabbing the png url"""
        soup = BeautifulSoup((item.get_attribute("innerHTML")), "html.parser")

        # Find the <div> element with the class "v-image__image" that contains the PNG URL
        image_div = soup.find("div", class_="v-image__image")

        # Extract the PNG URL from the "style" attribute
        style = image_div.get("style")

        # Parse the PNG URL from the "style" attribute
        start_index = style.find("url(") + 4
        end_index = style.find(")")
        png_url = style[start_index:end_index]

        # Adds data to their respective lists
        imageUrl.append(png_url)

        names.append(name)
        discount_prices.append(discount_price)
        end_dates.append(end_date)
        original_prices.append(original_price)
        descriptions.append(description)



# %%

common_columns = ["name", "discountedPrice", "originalPrice", "imageUrl", "descriptions", "endDate"]


# Builds scraped data to df
scraped_df = pd.DataFrame({'name': names, 
    'discountedPrice': discount_prices, 
    'originalPrice': original_prices,
    'imageUrl': imageUrl,
    'descriptions': descriptions,
    'endDate': end_dates
    })

# %%
"""CLEAN THE DATA"""
# Replace None with NaN (optional, for better DataFrame representation)
scraped_df = scraped_df.replace({None: np.nan})
scraped_df['endDate'] = scraped_df['endDate'].str.replace('Ends ', '', regex=False)
scraped_df['endDate'] = pd.to_datetime(scraped_df['endDate'], format='%b %d, %Y').dt.strftime('%Y-%m-%d')
scraped_df['discountedPrice'] = scraped_df['discountedPrice'].str.extract(r'(\d+\.\d+)').astype(float)
scraped_df['name'] = scraped_df['name'].str.strip()
scraped_df['originalPrice'] = scraped_df['originalPrice'].str.extract(r'(\d+\.\d+)').astype(float)
scraped_df['imageUrl'] = scraped_df['imageUrl'].str.strip('"')


# %%
scraped_df.to_json('broulimsDeals.json', orient='records', lines=True)




"""
# %%
# Not using this api to get data. Couldn't have get merge to be accurate

import requests

# API endpoint URL
api_url = "https://www.ecomadviewer.com/broulims-rexburg/api/brdata/32/coupons"

# Make an API request to get the JSON data
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse response
    data = response.json()

    # Access the "available" key in the JSON
    available_data = data.get("available", [])

    # Convert the "available" data into a Pandas DataFrame
    api_df = pd.DataFrame(available_data)

else:
    print("Failed to retrieve data from the API. Status code:", response.status_code)



# %%
Clean api data
# Convert End_Date to datetime
api_df['offerExpiryDate'] = pd.to_datetime(api_df['offerExpiryDate'], format='%Y-%m-%d')

"""