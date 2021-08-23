class Palindrome {
  async isPalindrome (value) {
    const reversed = [...value].reverse().join('')
    const result = reversed.toLowerCase().replaceAll(' ', '') === value.toLowerCase().replaceAll(' ', '')
    return {
      text: reversed,
      ...(result && { palindrome: true })
    }
  }
}

module.exports = Palindrome
