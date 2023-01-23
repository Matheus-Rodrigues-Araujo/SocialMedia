import { createSlice} from "@reduxjs/toolkit"

const initialState = {
  auth: null,
  isLogged: false,
  usersList: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
      authenticateUser: (state, action) =>{
        state.auth = action.payload
        state.isLogged = true
      },
      disconnectUser: (state)=> {
        state.auth = null
        state.isLogged = false
      }},
      
      storeUsers: (state, action) =>{
        state.usersList.push(action.payload)
      }
    }
)


export const 
{
  authenticateUser, 
  disconnectUser,
  storeUsers
} = userSlice.actions

export default userSlice.reducer