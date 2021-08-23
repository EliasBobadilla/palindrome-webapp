const { Router } = require('express')
const validationHandler = require('../handlers/validationHandler')
const { schema } = require('../schemas')
const PalindromeService = require('../services')

const palindromeService = new PalindromeService()
const router = Router()

router.get(
  '/',
  validationHandler(schema, 'query'),
  async (req, res, next) => {
    try {
      const { text } = req.query
      const response = await palindromeService.isPalindrome(text)
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
