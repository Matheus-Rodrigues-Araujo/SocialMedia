import {createSlice, PayloadAction} from '@reduxjs/toolkit'
// import type { RootState } from '../../config/store';

interface CounterState{
  value: number;
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers:{
    increment: (state) => {state.value +=1},
    decrement: (state) => {state.value -= 1},
    square: (state) => {state.value **=2},
    divide: (state,action) => {state.value /= action.payload},
    incrementByAmount: (state, action: PayloadAction<number>) =>{
      state.value += action.payload
    }
  }
})

export const {
  increment,
  decrement,
  square,
  divide,
  incrementByAmount
} = counterSlice.actions

export default counterSlice.reducer
