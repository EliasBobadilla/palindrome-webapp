import React from 'react'
import { Search } from '../components/search'
import { v4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { setResult } from '../store/slice'

export const SearchContainer = () => {
  const { data } = useSelector((state) => state)
  const dispatch = useDispatch()

  const submit = async (value) => {
    const response = await window.fetch(`${process.env.API_URL}/iecho/?text=${value}`)
    const result = await response.json()
    if (!result) return

    const dt = [...data.results]
    dt.unshift({ ...result, key: v4() })
    dispatch(setResult(dt))
  }

  return (<Search submit={submit} />)
}
