import Influx from 'influx'
import dotenv from 'dotenv'
dotenv.config()

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
global.influx = influx
export default influx