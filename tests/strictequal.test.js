const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictequal')

describe('test 1 fail on parameter types types', () => {
  describe('test 1 parameter are different types', () => {
    it('test 1 types differ', () => {
      // create test data for fail test
      const firstValTest1 = '5'
      const secondValTest1 = 5

      //call the function
      let test1Result = strictEqual(firstValTest1, secondValTest1)

      //make assertion the test fails
      expect(test1Result).to.equal(false)
    })
  })
})

describe('test 2 fail on parameter values', () => {
  describe('test 2 parameter are different values', () => {
    it('test 2 values differ', () => {
      // create test data for fail test
      const firstValTest1 = 6
      const secondValTest1 = 5

      //call the function
      let test1Result = strictEqual(firstValTest1, secondValTest1)

      //make assertion the test fails
      expect(test1Result).to.equal(false)
    })
  })
})

describe('test 3 pass on both parameter values and type', () => {
  describe('test 3 both values and type match', () => {
    it('test 3 parameters are an exact match', () => {
      // create test data for pass test
      const firstValTest3 = 5
      const secondValTest3 = 5

      //call the function
      let test3Result = strictEqual(firstValTest3, secondValTest3)

      //make assertions that the tst passes
      expect(test3Result).to.equal(true)
    })
  })
})