const superTest = require('supertest')
const chai = require('chai')
const expect = chai.expect

const localhostUrl = 'http://localhost:3000'
const currentValue = 'A la sala Saile y Elias a la sala'
const expectValue = 'alas al a sailE y eliaS alas al A'

const localhost = superTest(localhostUrl)

// eslint-disable-next-line no-undef
describe('palindrome API', () => {
  // eslint-disable-next-line no-undef
  it('Validate Response', async () => {
    const response = await localhost
      .get(`/iecho/?text=${currentValue}`)
      .then(response => {
        return response
      })
    expect(response.status, 'Status Successful').to.equal(200)
    expect(response.body.text, 'Text is inverted').to.equal(expectValue)
    // eslint-disable-next-line no-unused-expressions
    expect(response.body.palindrome, 'Text is palindrome').to.be.true
  })
})
