const expect = require('expect')
const mocha = require('mocha')
const rewire = require('rewire')
let app = rewire('./app')

let describe = mocha.describe
let it = mocha.it

describe('App', () => {
  it('should call the spy correctly', () => {
    let spy = expect.createSpy()
    spy('Greg', 24)
    expect(spy).toHaveBeenCalledWith('Greg', 24)
  })
  let db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)
  it('should call saveUser with user object', () => {
    let email = 'andrew@example.com'
    let password = '123abc'
    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})
