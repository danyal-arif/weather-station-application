import mqtt from 'mqtt'
const client = mqtt.connect(process.env.VUE_APP_MQTT_URL);
// eslint-disable-next-line no-unused-vars
client.on("connect", () => {
    console.log('connected')
  client.subscribe(process.env.VUE_APP_MQTT_TOPIC, (err) => {
    if (err) {
        process.exit(1)
    }
  });
});

// client.on("message", async (topic, message) => {
//   message = JSON.parse(message.toString())
//   const messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : []
//   messages.push(message)
//   localStorage.setItem('messages', JSON.stringify(messages))
// });

client.on('error', (err) => {
    console.log(err)
})

// const closeMqttConnection = () => {
//   client.end(); // This will close the connection to the MQTT broker
// };


export default client
