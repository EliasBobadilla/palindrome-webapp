const joi = require('joi')

const schema = joi.object({
  text: joi.string().min(1).required().messages({
    'string.empty': 'no text',
    'any.required': 'text is required'
  })
})

module.exports = { schema }
