import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Estudar React', completed: false },
    { id: 2, text: 'Criar projeto Vite', completed: true },
    { id: 3, text: 'Adicionar funcionalidades', completed: false },
  ])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')

  const addTodo = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos([...todos, { id: Date.now(), text: trimmed, completed: false }])
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(t => !t.completed))
  }

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const remaining = todos.filter(t => !t.completed).length

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">React To-do List</h1>

        <div className="input-row">
          <input
            className="todo-input"
            type="text"
            placeholder="Adicionar nova tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={addTodo}>+</button>
        </div>

        <div className="filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Ativas
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Concluídas
          </button>
        </div>

        <ul className="todo-list">
          {filteredTodos.length === 0 && (
            <li className="empty">Nenhuma tarefa aqui.</li>
          )}
          {filteredTodos.map(todo => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                className="todo-check"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>✕</button>
            </li>
          ))}
        </ul>

        <div className="footer">
          <span className="count">
            {remaining} tarefa{remaining !== 1 ? 's' : ''} restante{remaining !== 1 ? 's' : ''}
          </span>
          {todos.some(t => t.completed) && (
            <button className="clear-btn" onClick={clearCompleted}>
              Limpar concluídas
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
