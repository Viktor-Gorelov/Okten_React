import React, { useState, useEffect } from 'react';
import './App.css';

function useStorage({key, initialValue}: { key: any, initialValue: any }) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

const App = () => {

    const [toggle, setToggle] = useState(true);
    const [previous, setPrevious] = useState(true);
    const [storedValue, setStoredValue] = useStorage({key: 'Variable_Value', initialValue: true});

    const useToggle = () => {
        setToggle((prev) => !prev);
        setPrevious(toggle); // Saving current value as previous
    };

    const save = () => {
        setStoredValue(toggle);
    };

    return (
        <div className="App">
            <h2>{toggle.toString()}</h2>
            <button onClick={useToggle}>Switch Value</button>
            <h2>Previous Value: {previous.toString()}</h2>
            <h2>Stored Value: {storedValue.toString()}</h2>
            <button onClick={save}>Save Value to Storage</button>
        </div>
    );
};
export default App;