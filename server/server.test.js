const request = require('supertest')
const expect = require('expect')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

let app = require('./server').app

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done)
    })
  })
  describe('GET /users', () => {
    it('should return myself as a user', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Greg',
            age: 24
          })
        })
        .end(done)
    })
  })
})
