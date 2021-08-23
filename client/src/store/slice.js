import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  results: []
}

const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setResult (state, action) {
      state.results = action.payload
    }
  }
})

/**
 * method to assign values to data store
 * @param {object[]} value
 */
export const setResult = (value) => (dispatch) => {
  dispatch(slice.actions.setResult(value))
}

export default slice.reducer
