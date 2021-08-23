class Palindrome {
  /**
   * Method for validate if a word or sentence is a palindrome
   * @param {string} value Word o sentence to validate as palindrome
   * @returns {Promise<object>}
   */
  isPalindrome (value) {
    return new Promise((resolve) => {
      const reversed = [...value].reverse().join('')
      const result = reversed.toLowerCase().replace(/ /g, '') === value.toLowerCase().replace(/ /g, '')
      resolve({
        text: reversed,
        ...(result && { palindrome: true })
      })
    })
  }
}

module.exports = Palindrome
