import Influx from 'influx'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.INFLUX_URL)
console.log(process.env.INFLUX_PORT)
const influx = new Influx.InfluxDB({
    host: process.env.INFLUX_URL,
    database: 'weatherdb',
    port: parseInt(process.env.INFLUX_PORT),
    schema: [
      {
        measurement: 'weather',
        fields: {
          
          temperature: Influx.FieldType.FLOAT,
          humidity: Influx.FieldType.FLOAT
        },
        tags: [
          'city'
        ]
      }
    ]
  })
console.log('influx')
console.log(influx)
global.influx = influx
export default influx