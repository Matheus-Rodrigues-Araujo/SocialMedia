import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'
// import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer:{
    users: userReducer,
    // auth: authReducer,
  },
})
