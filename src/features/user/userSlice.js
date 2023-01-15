import { createSlice} from "@reduxjs/toolkit"

import { UsersData } from "../../fakeData"

const initialState = {
  value: UsersData,
  filteredUser: null
}

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers:{
    addUser: (state, action)=>{ state.value.push(action.payload)}
    ,
    filterUser: (state, action)=>{ state.value.filter(
        (user) => {
          if(user.username === action.payload){
            state.filteredUser = user
          }
        }
      )
    },
    
    deleteUser: (state,action)=>{
      state.value = state.value.filter((user)=> user.id !== action.payload.id )
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
})

export const { addUser, filterUser, updateUsername, deleteUser  } = userSlice.actions
export default userSlice.reducer

// deleteUser: (state, action) => {
//   state.value = state.value.filter((user) => user.id !== action.payload.id);
// },