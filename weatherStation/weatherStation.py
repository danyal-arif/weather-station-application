print('begin')
import time
import json
import random
import paho.mqtt.client as mqtt

import os
from dotenv import load_dotenv
load_dotenv()

MQTT_BROKER_ADDRESS = os.getenv("MQTT_BROKER_ADDRESS")
MQTT_BROKER_PORT = int(os.getenv("MQTT_BROKER_PORT"))
MQTT_TOPIC = os.getenv("MQTT_TOPIC")
print(os.getenv("MQTT_BROKER_PORT"))
def generate_weather_data():
    temperature = round(random.uniform(15, 30), 2)
    humidity = round(random.uniform(25, 70), 2)
    return {"temperature": temperature, "humidity": humidity}

def on_connect(client, userdata, flags, rc, properties):
    print(f"Connected with result code {rc}")
    client.subscribe(MQTT_TOPIC)

def on_publish(client, userdata, mid, rc, properties):
    print(f"Data published with message id {mid}")

def main():
    print('run')
    print(MQTT_BROKER_ADDRESS)
    client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2, transport="websockets")
    client.on_connect = on_connect
    client.on_publish = on_publish

    client.connect(MQTT_BROKER_ADDRESS, MQTT_BROKER_PORT, 60)

    while True:
        weather_data = generate_weather_data()
        payload = json.dumps(weather_data)

        # Publish weather data to the MQTT topic
        client.publish(MQTT_TOPIC, payload)

        print(f"Published: {payload}")

        # Wait for a while before sending the next data
        time.sleep(5)
main()