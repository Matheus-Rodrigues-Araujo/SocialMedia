import { createSlice, createReducer} from "@reduxjs/toolkit"

const initialState = {
  auth: {
    username: "",
    email: ""
  }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
      authenticateUser: (state, action) =>{
        return {...state, username: state.username}
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