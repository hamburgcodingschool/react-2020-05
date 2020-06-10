import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'

export default function App() {
  const [todos, setTodos] = useState([])
  const openTodos = todos.filter(todo => todo.status === 'open')
  const completedTodos = todos.filter(todo => todo.status === 'done')

  const handleAddTodo = todo => {
    setTodos([...todos, { ...todo, date: Date.now(), id: todos.length }])
  }

  const handleUpdateTodo = todoNew => {
    const todosNew = todos.map(todo => {
      if (todo.id === todoNew.id) {
        todo.status = todoNew.status
      }
      return todo
    })
    setTodos(todosNew)
  }

  const handleRemoveDone = () => {
    const openTodos = todos.filter(todo => todo.status === 'open')
    setTodos(openTodos)
  }


  return (
    <Router>
      <div className="App">
        <Navigation />
        <div>
          <AddTodo add={handleAddTodo} />
        </div>

        <Route path="/" exact>
          <TodoList todos={openTodos} updateTodo={handleUpdateTodo} />
        </Route>

        <Route path="/completed">
          {completedTodos.length > 0 && (
            <button type="button" onClick={handleRemoveDone}>
              Remove Completed
            </button>
          )}
          <TodoList todos={completedTodos} updateTodo={handleUpdateTodo} />
        </Route>

      </div>
    </Router>
  )
}

