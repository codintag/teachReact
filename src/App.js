import React from 'react';
import './App.css';
import Counter from "./compo"
import TaskList from "./todolist"

const App = (props) => {

  return (
    <div className="App">
      <TaskList />
<hr />
<hr />
<hr />
      <Counter color="violet" step={2}/>
      <Counter color="skyblue" step={1}/>
    </div>
  );
}

export default App;
