import mqtt from 'mqtt'
const client = mqtt.connect("mqtt://localhost");

client.on("connect", () => {
  client.subscribe("weather_data", (err) => {
    if (err) {
        console.log('Mqtt client unable to connect!')
        process.exit(1)
    }
  });
});

client.on("message", (topic, message) => {
  console.log(message.toString());
});

export default client
