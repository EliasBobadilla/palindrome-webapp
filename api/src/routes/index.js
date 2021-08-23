const { Router } = require('express')
const PalindromeController = require('../controllers')

const palindromeController = new PalindromeController()
const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const { text } = req.query
    const response = await palindromeController.isPalindrome(text)
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router
