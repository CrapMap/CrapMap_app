import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: {}
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state) => {
      state.value = {
        name: 'test user'
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = counterSlice.actions

export default counterSlice.reducer


// do something like this to pass in a value
// incrementByAmount: (state, action) => {
//   state.value += action.payload
// },