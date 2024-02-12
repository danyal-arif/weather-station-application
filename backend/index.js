import express from "express";
import connectDB from './utilities/db/index.js'
import dotenv from 'dotenv'
import errorHandler from "./middleware/errorHandler.js";
import intializeRoutes from "./routes/index.js";
import cors from './middleware/cors.js'
import mongoose from "mongoose";
import client from './mqtt.js'
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
    return app.listen(port, () => {
        console.log('app listening on port', + port)
    })
}
mongoose.connection.on('connected', () => {
    createServer()
})

export default createServer