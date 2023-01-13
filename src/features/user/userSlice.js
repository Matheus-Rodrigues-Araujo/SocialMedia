import { createSlice} from "@reduxjs/toolkit"
// import { PayloadAction } from "@reduxjs/toolkit";

import { UsersData } from "../../fakeData"

const initialState = {
  value: UsersData,
}

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers:{
    addUser: (state, action)=>{
      state.value.push(action.payload)
    }
  }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer