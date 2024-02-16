/* eslint-disable no-undef */
import User from '../../models/User'
import {getMockReq, getMockRes} from '@jest-mock/express'
import * as mockingoose from 'mockingoose'
import { login, register } from '../../controllers/userController'
import bcrypt from 'bcryptjs'
const registerData = {
    firstName: 'Danyal',
    lastName: 'Arif',
    email: 'danial.arif417@gmail.com',
    password: '123456'
}

const loginData = {
    email: 'danial.arif417@gmail.com',
    password: '123456'
}

describe('testing user api methods', () => {
    it('should register a new user', async () => {
        //mocks
        const req = getMockReq({
            body: registerData
        })
        const {res, next} = getMockRes({
            statusCode: 201,
            json: jest.fn().mockReturnValue(registerData)
        })
        mockingoose(User).toReturn(registerData, 'save')
        //test
        await register(req, res, next)
        expect(res.json).toHaveBeenCalled()
    })

    it('should login a user', async () => {
        //mocks
        const req = getMockReq({
            body: loginData
        })
        const {res, next} = getMockRes({
            statusCode: 200,
            json: jest.fn().mockReturnValue(loginData)
        })
        mockingoose(User).toReturn(loginData, 'findOne')
        jest.spyOn(bcrypt, 'compare').mockReturnValue(true)
        //test
        await login(req, res, next)
        expect(res.json).toHaveBeenCalled()
    })
})