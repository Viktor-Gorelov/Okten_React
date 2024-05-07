import React, {useState} from 'react';
import './App.css';

interface IState{
    value: boolean;
}
const App = () =>{
    let value:string = 'false';
 const [toggle, setToggle] = useState<IState>({value:true});
 const [previous, setPrevious] = useState<IState>({value:true});
  const switching = () => {
      if(toggle.value){
          setToggle({value: false});
          value = 'false';
          console.log(toggle.value);
      }
      else {
          setToggle({value: true});
          value = 'true';
          console.log(toggle.value);
      }
  };
  const showPreviousValue = () =>{
      if(toggle.value){
          setPrevious({value: false});
      }
      else{
          setPrevious({value: true});
      }
  }
  const save = () =>{
      localStorage.setItem("Variable_Value", (toggle.value).toString());
  }

  return (
    <div className="App">
      <h2>{(toggle.value).toString()}</h2>
      <button onClick={switching}>Switch Value</button>
        <h2>Previous Value: {(previous.value).toString()}</h2>
      <button onClick={showPreviousValue}>Previous Value</button>
      <button onClick={save}>Save Value to Storage</button>
    </div>
  );
}

export default App;
