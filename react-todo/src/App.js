import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";
import Context from "./context";

function App() {

  const [todos, setTodos] = React.useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
      })
    )
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
      }])
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo onCreate={addTodo}/>

        { todos.length
          ? <TodoList todos={todos} onToggle={toggleTodo}/>
          : <p>No todos</p>
        }


      </div>
    </Context.Provider>
  );
}

export default App;
