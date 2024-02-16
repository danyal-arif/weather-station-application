/* eslint-disable no-undef */
import request from 'supertest'
import dotenv from 'dotenv'
import createServer from '../../index.js'
import mongoose from 'mongoose'
dotenv.config()
//test data
const user = {
    firstName: 'Danyal',
    lastName: 'Arif',
    email: 'danial.arif417@gmail.com',
    password: '123456'
}
const loginUser = {
    email: 'danial.arif417@gmail.com',
    password: '123456'
}
let app

beforeAll(async () => {
    process.env.MODE = 'TEST'
    process.env.INFLUX_URL = "localhost"
    jest.setTimeout(1000 * 10)
    app = await createServer(4000)
    await mongoose.connection.collection('users').drop()
})
describe('integration testing', () => {
    it('should post a new user and return 201 status code', async () => {
        const res = await request(app).post('/user/register').send(user)
        expect(res.status).toBe(201) && expect(res.body.data).toBeDefined() && expect(res.body.data[0].firstName).toEqual(user.firstName)
    })
    it('should login with a user and return 200 status code', async () => {
        const res = await request(app).post('/user/login').send({email: loginUser.email, password: loginUser.password})
        expect(res.status).toBe(200) && expect(res.body.data).toBeDefined()
    })
    it('should call the weather api to get data and return 200 status code', async () => {
        const loginRequest = await request(app).post('/user/login').send({email: loginUser.email, password: loginUser.password})
        const res = await request(app).get('/weather').set('Authorization', loginRequest.body.data).query({ startTime: (new Date()).getTime(), endTime: (new Date()).getTime() })
        expect(res.status).toBe(200) && expect(res.body.data).toBeDefined() 
    })
})

afterAll(async () => {
    await mongoose.connection.collection('users').drop()
    process.emit('close-mqtt');
    await mongoose.disconnect()
    await app.close()
})