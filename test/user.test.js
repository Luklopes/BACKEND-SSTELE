const request = require('supertest');

const app = require('../src/app');

test('deve listar os usuarios', () => {
  return request(app).get('/users').then((res)=> {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('name', 'Jonh');
  });
});

test('deve inserir novo usuario com sucesso', () => {
  return request(app).post('/users').send({name: 'Lucas Lopes', email: 'lucasbllopes@hotmail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Lucas Lopes');
    });
});
