import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';

const App = inject("todoStore")(observer((props) => {

  const [inputVal, setInputVal] = useState("");

  const addTask = () => {
    if(inputVal !== "") {
      props.todoStore.addTask(inputVal);
      setInputVal("");
    }
  }
  
  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
      <button onClick={addTask}>ADD</button>
      <Tasks />
    </div>
  );
}))

export default App;
