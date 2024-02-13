import userRouter from './user.js'
import weatherRouter from './weather.js'
function intializeRoutes(app) {
    app.use('/user', userRouter)
    app.use('/weather', weatherRouter)
}

export default intializeRoutes