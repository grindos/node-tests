const expect = require('expect')

const utils = require('./utils')

it('should add two numbers', () => {
  let res = utils.add(33, 11)

  expect(res).toBe(44).toBeA('number')

});

it('should square the number', () => {
  let res = utils.square(15)

  expect(res).toBe(225).toBeA('number')
})

it('should verify first and last names are set', () => {
  let user = {}
  utils.setName(user, 'greg yanushkovskiy')

  expect(user).toInclude({firstName: 'greg', lastName: 'yanushkovskiy'})
})

// it('should expect some values', () => {
//   // expect(12).toNotBe(11)
//   // expect({name: 'greg'}).toEqual({name: 'Greg'})
//   // expect([2,3,4]).toExclude(1)
//   expect({
//     name: 'Greg',
//     age: 24
//   }).toExclude({
//     age: 23
//   })
// })