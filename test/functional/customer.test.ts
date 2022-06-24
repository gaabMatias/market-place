import supertest from 'supertest'

describe('Costumer functional tests', () => {
  it('should a return the costumer history', async () => {
    const {body, status} = await supertest(app).get('costumer/history');
    expect(status).toBe(200);
    expect(body).toBe([{
      "product": [{
        "uuid": "",
        "price": "",
        "description": "",
        "weigh": "",
        "length": "",
        "fragile": ""
    }], }])

  })
})