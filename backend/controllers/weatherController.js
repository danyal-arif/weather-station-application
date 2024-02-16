import RequestError from "../utilities/error/RequestError.js"
export const getWeatherData = async (req, res, next) => {
    const influx = global.influx
    const startTime = parseInt(req.query.startTime) * 1000000
    const endTime = parseInt(req.query.endTime) * 1000000
    const dbQuery = `SELECT * FROM weather WHERE time >= ${(startTime)} AND time <= ${(endTime)}`;
    try {
        const result = await influx.query(dbQuery)
        res.json({data: result})
    } catch(e) {
        next(new RequestError({message: 'Error while querying influxdb', context: e}))
    }
}