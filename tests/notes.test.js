const request = require('supertest');
const app = require('../src/app');

describe('Notes endpoints (no DB connected)', () => {
  it('GET /api/notes should return 503 when DB not connected', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.statusCode).toBe(503);
  });

  it('POST /api/notes should return 503 when DB not connected', async () => {
    const res = await request(app).post('/api/notes').send({ title: 'x' });
    expect(res.statusCode).toBe(503);
  });
});
