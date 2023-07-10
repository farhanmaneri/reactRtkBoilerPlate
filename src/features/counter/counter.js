import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

 export  function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button

          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
        
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <button onClick={()=>dispatch(incrementByAmount(2))}> Add by 2</button>
      </div>
    </div>
  )
}
