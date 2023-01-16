import { createSlice} from "@reduxjs/toolkit"

// import { UsersData } from "../../fakeData"

const initialState = {
  value: [],
  auth:null
}

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers:{
    addUser: (state, action)=>{ state.value.push(action.payload)}
    ,
    validateUser: (state, action)=>{ state.value.filter(
        (user) => {
          if(user.email === action.payload.email && user.password === action.payload.password ){
            state.auth = {...user}
          }
        }
      )
    },
    disconnectUser: (state)=> {state.auth = null}}
    ,
    deleteUser: (state,action)=>{
      state.value = state.value.filter((user) => user.id !== action.payload.id)
    }

    ,
    updateUsername: (state,action) => {
      state.value.map((user)=>{
        if(user.id === action.payload.id){
          user.username = action.payload.username
        }
      })
    }
  }
)

export const 
{
  addUser,
  validateUser, 
  updateUsername, 
  deleteUser, 
  disconnectUser
} = userSlice.actions

export default userSlice.reducer

// deleteUser: (state, action) => {
//   state.value = state.value.filter((user) => user.id !== action.payload.id);
// },