import requests
import dateutil.parser as date
from datetime import timedelta
from time import sleep

url = "http://localhost:8000/events/"
experiment = 45
timestamp = "2020-07-03T17:41:53.071183Z"

body = {
    "name": "DRT",
    "timestamp": timestamp,
    "status": "mistake",
    "experiment": experiment
}

ids = []

print("Loading . . .")

for i in range(10):
    timestamp = date.parse(body.get("timestamp"))
    timestamp += timedelta(seconds=1)
    body["timestamp"] = timestamp.isoformat()

    response = requests.post(url, json=body)
    id_ = response.json().get("id")
    ids.append(id_)

    sleep(2)

print("Removing . . .")

print(ids)

for id_ in ids:
    requests.delete(f'{url}{id_}')
