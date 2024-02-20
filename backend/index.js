import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
import client from './mqtt.js'
import connectDB from './utilities/db/index.js'
import cors from './middleware/cors.js'
import intializeRoutes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";
import swaggerDocs from "./utilities/swagger/index.js";
dotenv.config()

const app = express()

connectDB()

app.use(express.json())
app.use(cors)
intializeRoutes(app)
app.use(errorHandler)

//function for starting the server
const createServer = async (appPort) => {
    const port = appPort || process.env.PORT || 5000
    console.log(port)
    return app.listen(port, () => {
        console.log('app listening on port', + port)
        swaggerDocs(app)
    })
}
mongoose.connection.on('connected', () => {
    if (process.env.MODE !== 'TEST')
        createServer()
})

export default createServer