import app from './src/app'
import request from 'supertest'

export const caluculateDiscount = (price: number, percentage: number) => {
    return (price * percentage) / 100
}

describe('App', () => {
    it('should return correct discount amount ', () => {
        const discount = caluculateDiscount(100, 10)
        expect(discount).toBe(10)
    })

    it('should return 200 status code', async () => {
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200)
    })
})
