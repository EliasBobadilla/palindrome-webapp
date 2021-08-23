import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import { Container } from './styles'

export const Search = ({ submit }) => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (!value) return
    submit(value)
  }

  return (
    <Container>
      <Form.Control
        type='text' placeholder='Insert text' value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button disabled={!value} variant='primary' onClick={handleSubmit}>
        Send
      </Button>
    </Container>
  )
}

Search.propTypes = {
  submit: PropTypes.func.isRequired
}
