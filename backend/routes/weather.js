import express from "express";
import checkToken from "../middleware/checkToken.js";
import { getWeatherData } from "../controllers/weatherController.js";

const router = express.Router()

router.get('/', checkToken, getWeatherData)

export default router