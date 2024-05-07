import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newItem = {
      name: itemName,
      dueDate: itemDate
    };

    // Create a new array with the updated todo items
    const updatedTodoItems = [...todoItems, newItem];

    // Set the state with the updated array
    setTodoItems(updatedTodoItems);
  }

  const onDelete = (itemName) => {
    const updatedTodoItems = todoItems.filter(item => item.name !== itemName);

    setTodoItems(updatedTodoItems);
  }


  return (
    <div className="todo-container">
      <AppName />
      <AddTodo onHandle={handleNewItem} />
      <TodoItems onDelete={onDelete} todoItems={todoItems} />
    </div>
  );
}

export default App;
