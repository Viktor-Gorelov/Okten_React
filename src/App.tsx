import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment} from "./redux/slices/slice1";

function App() {

  const {value} = useAppSelector((state) => state.slice1);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() =>{
          dispatch(increment(100));
      }}>Increment</button>
      <button onClick={()=>{
          dispatch(decrement());
      }}>Decrement</button>
    </div>
  );
}

export default App;
