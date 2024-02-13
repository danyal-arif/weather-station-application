import Influx from 'influx'
const influx = new Influx.InfluxDB({
    host: 'localhost',
    database: 'weatherdb',
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