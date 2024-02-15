import mqtt from 'mqtt'
const CITIES = ['Lahore', 'Islamabad', 'Karachi', 'Multan', 'Rawalpindi']
import dotenv from 'dotenv'
dotenv.config()
const client = mqtt.connect(process.env.MQTT_URL);
import Influx from './utilities/influx/index.js'
const influx = global.influx
console.dir(Influx)
client.on("connect", async () => {
  //verify that database exists
  try {
    const databases = await influx.getDatabaseNames()
    if (!databases.includes('weatherdb'))
      await influx.createDatabase('weatherdb')
  } catch(e) {
    process.exit(1)
  }
  client.subscribe(process.env.MQTT_TOPIC, (err) => {
    if (err) {
        process.exit(1)
    }
  });
});

client.on("message", async (topic, message) => {
  message = JSON.parse(message.toString())
  //write that message to influxdb
  try {
    await influx.writePoints([
      {
        measurement: 'weather',
        tags: { city: CITIES[Math.floor(Math.random() * CITIES.length)] },
        fields: { temperature: message.temperature, humidity: message.humidity },
      }])
  } catch(e) {
    process.exit(1)
  }
});

export default client
