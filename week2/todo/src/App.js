import './App.css';
import React, {useState} from 'react'


function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleToDoDelete = (delIdx) =>
  {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    })

    setTodos(filteredTodos)
  }

  const handleToDoSubmit = (e) => {
    e.preventDefault();

    if(newTodo.length === 0) return;

  const todoItem = {
    text: newTodo,
    complete: false
  }

    setTodos([...todos, todoItem]);
    setNewTodo("")
    // console.log(todos);
  }

const handleToDoStatus = (idx) => {
  const updatedTodos = todos.map((todo, i) => {
    if (idx === i) {
      todo.complete = !todo.complete
      // const updatedTodo = {...todo, complete: !todo.complete};
      // return updatedTodo;
    }
    
    return todo;
  })

  setTodos(updatedTodos);
}

  return (
    <div>
      <form
        onSubmit={ (e) => {
          handleToDoSubmit(e);
        }}>

        <input
          onChange={ (e) => {
            setNewTodo(e.target.value);
          }}
          type='text'
          value={newTodo}
        />

        <div>
          <button>Add</button>
        </div>
      </form>

    {todos.map((todo, i) => {
      const todoClasses = [];
        
      if(todo.complete) {
        todoClasses.push("strike")
      }

      return (
        <div key={i}>
          <span className={todoClasses.join(" ")}>{todo.text}</span>
          <input onChange={ (e) => {
            handleToDoStatus(i);
          }}
          checked={todo.complete}
          type="checkbox" />
          <button
            onClick={ (e) => {
            handleToDoDelete(i);
          }}
          style={{marginLeft:"5px"}}>Delete</button>
        </div>
        );
      })}
  </div>
  );
}

export default App;
