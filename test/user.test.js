const request = require('supertest');

const app = require('../src/app');

test('deve listar os usuarios', async () => {
  const response = await request(app).get('/users');

  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(1);
  expect(response.body[0]).toHaveProperty('name', 'Jonh');
});

test('deve inserir novo usuario com sucesso', () => {
  return request(app).post('/users').send({ name: 'Lucas Lopes', email: 'lucasbllopes@hotmail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Lucas Lopes');
    });
});