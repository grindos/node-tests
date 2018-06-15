const expect = require('expect')

const utils = require('./utils')

it('should add two numbers', () => {
  let res = utils.add(33, 11)

  expect(res).toBe(44).toBeA('number')

});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number')
    done()
  })
})

it('should square the number', () => {
  let res = utils.square(15)

  expect(res).toBe(225).toBeA('number')
})

it('should async square the number', (done) => {
  utils.asyncSquare(7, (square) => {
    expect(square).toBe(49).toBeA('number')
    done()
  })
})

it('should verify first and last names are set', () => {
  let user = {}
  utils.setName(user, 'greg yanushkovskiy')

  expect(user).toInclude({firstName: 'greg', lastName: 'yanushkovskiy'})
})