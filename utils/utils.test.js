const utils = require('./utils')

it('should add two numbers', () => {
  let res = utils.add(33, 11)

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`)
  }

});

it('should square the number', () => {
  let res = utils.square(15)

  if (res !== 225) {
    throw new Error(`Expected 225, but got ${res}`)
  }
})