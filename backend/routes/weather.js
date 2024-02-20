import express from "express";
import checkToken from "../middleware/checkToken.js";
import { getWeatherData } from "../controllers/weatherController.js";

const router = express.Router()

/**
 * @openapi
 * /weather:
 *   get:
 *     tags:
 *       - Weather
 *     summary: Get weather data in a time range
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                    type: object
 *                    properties:
 *                      time:
 *                        type: string
 *                      city:
 *                        type: string
 *                      humidity:
 *                        type: string
 *                      temperature:
 *                        type: string
 *       '401':
 *         description: Invalid/Expired Token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 */

router.get('/', checkToken, getWeatherData)

export default router