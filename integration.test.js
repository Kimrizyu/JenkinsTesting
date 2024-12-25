const request = require('supertest');
const app = require('./app');

describe('Integration Tests', () => {
    it('should return 200 and a welcome message for the root route', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Welcome to our API!');
    });

    it('should return 404 for non-existent routes with a JSON error message', async () => {
        const res = await request(app).get('/non-existent');
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({ error: 'Route not found' });
    });

    it('should return 200 and valid JSON for /api/status', async () => {
        const res = await request(app).get('/api/status');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status', 'ok');
        expect(res.body).toHaveProperty('timestamp');
        expect(typeof res.body.timestamp).toBe('string');
    });
});
