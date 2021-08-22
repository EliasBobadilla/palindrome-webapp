class Palindrome {
  async isPalindrome (value) {
    const reversed = [...value].reverse().join('')
    return {
      text: reversed,
      ...(reversed === value && { palindrome: true })
    }
  }
}

module.exports = Palindrome
