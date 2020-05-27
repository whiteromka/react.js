import React from 'react';
import TodoList from "./Todo/TodoList";
import Shit from "./shitComponents/Shit";

function App() {

    const todos = [
        {id: 1, completed: false, title: 'buy bread'},
        {id: 2, completed: false, title: 'buy butter'},
        {id: 3, completed: false, title: 'buy milk'}
    ]

  return (
    <div className="wrapper">
        <h1>React tutor</h1>
        <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
