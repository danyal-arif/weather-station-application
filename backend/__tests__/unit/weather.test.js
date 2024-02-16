/* eslint-disable no-undef */

import { getMockReq, getMockRes } from "@jest-mock/express"
import { getWeatherData } from "../../controllers/weatherController"

const weatherData = [{
    city: 'Lahore',
    humidity: 45,
    temperature: 39,
    time: "2022-03-01"
}]

describe('testing weather api', () => {
    it('should query weather data', async () => {
        //mocks
        const req = getMockReq({
            query: {
                startTime: (new Date()).getTime(),
                endTime: (new Date()).getTime()
            }
        })
        const {res, next} = getMockRes({
            statusCode: 200,
            json: jest.fn().mockReturnValue(weatherData)
        })
        const influx = {
            query: () => {return weatherData}
        }
        global.influx = influx
        //jest.spyOn(influx, 'query').mockReturnValue(weatherData)
        await getWeatherData(req, res, next)
        expect(res.json).toHaveBeenCalled()
    })
})