const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('responds with Welcome to our API!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Welcome to our API!');
    });
});
