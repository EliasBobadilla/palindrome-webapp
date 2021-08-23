import React from 'react'
import { ResultList } from '../components/resultList'
import { useSelector } from 'react-redux'

export const PalindromeContainer = () => {
  const { data } = useSelector((state) => state)
  return (<ResultList list={data.results} />)
}
