import { createSlice} from "@reduxjs/toolkit"

const initialState = {
  auth: {
    username: ""
  }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
      authenticateUser: (state, action) =>{
        state.auth = {username: action.payload.username}
      },
      disconnectUser: (state)=> {state.auth = null}}
    }
)


export const 
{
  authenticateUser, 
  disconnectUser
} = userSlice.actions

export default userSlice.reducer