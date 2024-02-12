import userRouter from './user.js'
function intializeRoutes(app) {
    app.use('/user', userRouter)
}

export default intializeRoutes