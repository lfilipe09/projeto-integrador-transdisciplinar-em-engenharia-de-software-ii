const request = require('supertest');
const app = require('../src/app');

describe('Notes endpoints (no DB connected)', () => {
  it('GET /api/notes should return 503 when DB not connected', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.statusCode).toBe(503);
  });

  it('POST /api/notes invalid title should return 400 (validated before DB)', async () => {
    const res = await request(app).post('/api/notes').send({ title: ' ' });
    expect(res.statusCode).toBe(400);
  });

  it('POST /api/notes valid title should return 503 when DB not connected', async () => {
    const res = await request(app).post('/api/notes').send({ title: 'Valid title' });
    expect(res.statusCode).toBe(503);
  });

  it('PUT /api/notes/:id should return 503 when DB not connected', async () => {
    const res = await request(app).put('/api/notes/123').send({ title: 'New' });
    expect(res.statusCode).toBe(503);
  });

  it('DELETE /api/notes/:id should return 503 when DB not connected', async () => {
    const res = await request(app).delete('/api/notes/123');
    expect(res.statusCode).toBe(503);
  });
});
