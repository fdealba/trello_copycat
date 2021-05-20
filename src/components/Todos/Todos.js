import Todo from './Todo/Todo';
import { useState } from 'react';

import './Todos.css';

const Todos = props => {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = () => {
    setTodoList((prevList) => {
      return [...prevList, {}];
    })
  }

  const mappedLists = todoList.map((todo, idx) => <Todo key={idx}/>);

  return (
    <>
      <button onClick={addTodoHandler}>Add Todo</button>
      <div className="todosContainer">
        {!todoList.length ? 'No lists created yet' : mappedLists}
      </div>
    </>
  );
}

export default Todos;
