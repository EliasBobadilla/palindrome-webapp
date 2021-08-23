import React from 'react'
import { Result } from '../result'
import PropTypes from 'prop-types'
import { Container } from './styles'

export const ResultList = ({ list }) => (
  <Container>
    {
        list.map(item => (
          <div key={item.key}>
            <Result text={item.text} value={item.palindrome} />
          </div>)
        )
    }
  </Container>
)

ResultList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    palindrome: PropTypes.bool
  }))
}
