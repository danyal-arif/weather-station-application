## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/danyal-arif/weather-station-application.git
   ```
2. Open the repo directory in terminal and run. 
   ```sh
   docker-compose build
   ```
3. Now run. 
   ```sh
   docker-compose up
   ```
4. Open chrome browser and navigate to http://localhost:8080/<br>

## Running Tests

1. Navigate to backend directory and create .env.test with the following data.<br>

   ```shell
  DB_URI="mongodb://127.0.0.1:27017/weather"
  PORT="3000"
  JWT_SECRET='weather_app'
  MQTT_URL="mqtt://localhost:1883"
  MQTT_TOPIC="weather_data"
  INFLUX_URL="localhost"
  INFLUX_PORT="8086"
  MODE="TEST"
   ```

2. Open the backend terminal in directory and run.
   ```sh
   npm run test
   ```
