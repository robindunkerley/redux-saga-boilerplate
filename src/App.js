import './App.css';
import Counter from './components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment} from './redux/ducks/counter'
import React, {useEffect} from 'react';
import { getUser } from './redux/ducks/user'

function App() {
  const count = useSelector((state) => state.counter.count)
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }
  console.log(user)



  return (
    <div className="App">
      {/* logging data from the api call */}
      {user && 
      <h1>Hello {user.name} {user.lastName}</h1>
      }
      <h1>Total Votes: {count} </h1>
      <div>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleIncrement}>increment</button>
      </div>
      <Counter voter="Sally"/>
      <Counter/>

    </div>
  );
}

export default App;
