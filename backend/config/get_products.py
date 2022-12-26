import os
import json
import requests
import pandas as pd
from datetime import datetime


def fetch(url: str) -> list:
    res = requests.get(url)
    return json.loads(res.content)


def process(products: list) -> pd.DataFrame:
    processed = []
    for product in products:
        processed.append({
            'ID': product['id'],
            'Name': product['name'],
            'Username': product['username'],
            'Email': product['email'],
            'Phone': product['phone'],
            'Company': product['company']['name']
        })
    return pd.DataFrame(processed)


def save(products: pd.DataFrame, path: str) -> None:
    products.to_csv(path, index=False)


if __name__ == '__main__':
    products = fetch(url='https://jsonplaceholder.typicode.com/products')
    products = process(products=products)
    curr_timestamp = int(datetime.timestamp(datetime.now()))
    path = os.path.abspath(f'Documents/cron-tutorial/output/products_{curr_timestamp}.csv')
    save(products=products, path=path)