const request = require('supertest')
const expect = require('expect')

let app = require('./server').app

it('should return hello world responce', (done) => {
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
