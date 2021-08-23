import React from 'react'
import Badge from 'react-bootstrap/Badge'
import PropTypes from 'prop-types'
import { Container, Text } from './styles'

export const Result = ({ text, value }) => {
  const detail = {
    background: value ? 'success' : 'danger',
    message: value ? "it's a palindrome" : "it's not a palindrome"
  }
  return (
    <Container>
      <Text>{text}</Text>
      <Badge bg={detail.background}>{detail.message}</Badge>
    </Container>
  )
}

Result.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.bool
}
