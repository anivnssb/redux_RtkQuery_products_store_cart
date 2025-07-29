import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/counterSlice'
import AllProducts from './components/AllProducts'
import type { RootState } from './store/store'
import type { AppDispatch } from './store/store'

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{count}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <AllProducts />
    </>
  )
}

export default App 