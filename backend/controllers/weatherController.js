import RequestError from "../utilities/error/RequestError.js"
const influx = global.influx
export const getWeatherData = async (req, res, next) => {
    const startTime = req.query.startTime
    const endTime = req.query.endTime
    const dbQuery = `SELECT * FROM weather WHERE time >= ${startTime} AND time <= ${endTime}`;
    try {
        const result = await influx.query(dbQuery)
        res.json({data: result})
    } catch(e) {
        next(new RequestError({message: 'Error while querying influxdb', context: e}))
    }
}