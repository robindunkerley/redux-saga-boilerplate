import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../redux/ducks/counter'

const Counter = ({voter}) => {
    const [voteCount, setVoteCount] = useState(0)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
        setVoteCount((prev) => prev + 1)
    }

    const handleDecrement = () => {
        if(voteCount > 0) {
            dispatch(decrement())
            setVoteCount((prev) => prev - 1)
        }
    }


  return (
      <div>
          <h1>Voter: {voter}</h1>
          <h1>{voteCount}</h1>
          <div>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
          </div>
      </div>
  )
};

Counter.defaultProps = {
    voter: 'Voter'
}

export default Counter;
