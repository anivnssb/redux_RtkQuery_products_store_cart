import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/counterSlice'

const App = () => {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
    <h1 style={{textAlign:"center"}}>{count}</h1>
   <div style={{display:"flex",justifyContent:"center",gap:"10px"}}> 
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(increment())}>+</button>
    </div>
    </>
  )
}

export default App