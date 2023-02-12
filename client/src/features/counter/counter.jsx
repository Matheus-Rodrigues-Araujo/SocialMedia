import { useAppDispatch, useAppSelector } from '../../config/hooks'

import { 
  increment,
   decrement,
   square,
   divide,
   incrementByAmount
   } from '../counter/counterSlice'

export function Counter() {
  const count = useAppSelector( (state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div>
      <div>
        <button onClick={()=>dispatch(increment())} aria-label="Increment value">
          Increment
        </button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrement())} aria-label="Decrement value">
          Decrement
        </button>
        <button onClick={()=>dispatch(divide(5))} aria-label="Decrement value">
          Divide
        </button>
        <button onClick={()=>dispatch(square())} aria-label="Decrement value">
          Square
        </button>
        <button onClick={()=>dispatch(incrementByAmount(100))} aria-label="Decrement value">
          By Amount
        </button>
      </div>
    </div>
  )
}
