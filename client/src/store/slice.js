import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { text: 'uno', palindrome: false, key: 1 },
  { text: 'dos', palindrome: true, key: 2 },
  { text: 'tres', palindrome: true, key: 3 }
]

const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setResult (state, action) {
      state.loading = action.payload
    }
  }
})

export const setResult = (value) => (dispatch) => {
  dispatch(slice.actions.setResult(value))
}

export default slice.reducer
