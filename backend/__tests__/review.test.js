import request from 'supertest'
import dotenv from 'dotenv'
import createServer from '../index'
import { getMovie } from '../services/movieService'
import { getReview } from '../services/reviewService'
dotenv.config()
//test data
const review = {
    description: "This movie is awesome",
    stars: 4,
};
const loginUser = {
    email: 'danyalarif456@gmail.com',
    password: 'DanyalArif@123'
}
let app
let token
jest.setTimeout(10000 * 10)
beforeAll(async () => {
    app = await createServer(4000)
    //login request
    const loginRequest = await request(app).post('/user/login').send({email: loginUser.email, password: loginUser.password})
    const res = await request(app).post('/movie').set('Authorization', loginRequest.body.data).send(movie)
    expect(res.status).toBe(200) && expect(res.body.data).toBeDefined()
    token = loginRequest.body.data
})
//testing user api
describe('review api testing', () => {
    it('should post a new review and return 201 status code', async () => {
        const tempMovie = await getMovie({title: 'Avengers Endgame'})
        expect(tempMovie).not.toBeNull()
        review.movie = tempMovie._id
        const res = await request(app).post('/review').set('Authorization', token).send(review)
        expect(res.status).toBe(201) && expect(res.body.data).toBeDefined()
    })
    it('should edit a review and return 204 status code', async () => {
        const tempUser = await request(app).get('/user/me').set('Authorization', token)
        const tempReview = await getReview({user: tempUser.body.data._id})
        const res = await request(app).put(`/review/${tempReview._id}`).set('Authorization', token).send({description: 'This movie is awesome!'})
        expect(res.status).toBe(204) && expect(res.body.message).toBeDefined()
    })
    it('should delete a review and return 204 status code', async () => {
        const tempUser = await request(app).get('/user/me').set('Authorization', token)
        const tempReview = await getReview({user: tempUser.body.data._id})
        const res = await request(app).delete(`/review/${tempReview._id}`).set('Authorization', token)
        expect(res.status).toBe(204) && expect(res.body.message).toBeDefined()
    })
})

afterAll(async () => {
    await app.close()
})

