import React, {useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {increment,decrement,reset,change} from "./redux/slices/slice1";

function App() {

    const {value} = useAppSelector((state) => state.slice1);
    const dispatch = useAppDispatch();
    const [number, setNumber] = useState('');
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() =>{
                dispatch(increment(100));
            }}>Increment</button>
            <button onClick={()=>{
                dispatch(decrement(100));
            }}
            >Decrement</button>
            <button onClick={()=>{
                dispatch(reset())
            }}>Reset</button>
            <form>
                <input
                type="number"
                name="inputNumber"
                value={number}
                onChange={(e)=>setNumber(e.target.value)}/>

                <input
                type="submit"
                value="Send"
                onClick={(e) =>{
                    e.preventDefault();
                    dispatch(change(Number(number)))
                }}/>
            </form>
        </div>
    );
}

export default App;
