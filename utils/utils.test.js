const expect = require('expect')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

const utils = require('./utils')

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11)
      expect(res).toBe(44).toBeA('number')
    })

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (err, sum) => {
        if (err) {
          console.log(err)
        }
        expect(sum).toBe(7).toBeA('number')
        done()
      })
    })
  })
  describe('#square', () => {
    it('should square the number', () => {
      let res = utils.square(15)
      expect(res).toBe(225).toBeA('number')
    })

    it('should async square the number', (done) => {
      utils.asyncSquare(7, (err, square) => {
        if (err) {
          console.log(err)
        }
        expect(square).toBe(49).toBeA('number')
        done()
      })
    })
  })
  describe('#setName', () => {
    it('should verify first and last names are set', () => {
      let user = {}
      utils.setName(user, 'Greg Yanushkovskiy')
      expect(user).toInclude({firstName: 'Greg', lastName: 'Yanushkovskiy'})
    })
  })
})
