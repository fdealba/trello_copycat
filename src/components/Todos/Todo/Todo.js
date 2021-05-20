import { useRef, useState } from 'react';
import "./Todo.css";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const onValueChanged = (event) => {
    setInputValue(event.target.value);
  }

  const newItemHandler = () => {
    if (inputValue == "") return;
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue('');
  }

  const deleteItemHandler = (idx) => {
    setItems(prevItems => prevItems.filter((item, index) => idx !== index))
  }

  const clearAllHandler = () => {
    setItems([]);
  }

  const mappedItems = items.map((item, idx) => {
    return (
      <div key={idx} className="item">
        <p>{item}</p>
        <button onClick={() => deleteItemHandler(idx)}>Delete</button>
      </div>
    )
  })

  return (
    <div className="todo">
      <div className="inputWrapper">
        <input placeholder="Please enter a task" value={inputValue} onChange={onValueChanged} ref={inputRef}/>
        <button onClick={newItemHandler}>New item</button>
      </div>
      <div className="itemList">
        {!items.length ? 'No items added yet' : mappedItems}
      </div>
      <button onClick={clearAllHandler}>Clear all</button>
    </div>
  );
};

export default Todo;
