import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">React To-do List</h1>

        <div className="input-row">
          <input
            className="todo-input"
            type="text"
            placeholder="Adicionar nova tarefa..."
          />
          <button className="add-btn">+</button>
        </div>

        <div className="filters">
          <button className="filter-btn active">Todas</button>
          <button className="filter-btn">Ativas</button>
          <button className="filter-btn">Concluídas</button>
        </div>

        <ul className="todo-list">
          <li className="todo-item">
            <input type="checkbox" className="todo-check" />
            <span className="todo-text">Estudar React</span>
            <button className="delete-btn">✕</button>
          </li>
          <li className="todo-item">
            <input type="checkbox" className="todo-check" defaultChecked />
            <span className="todo-text completed">Criar projeto Vite</span>
            <button className="delete-btn">✕</button>
          </li>
          <li className="todo-item">
            <input type="checkbox" className="todo-check" />
            <span className="todo-text">Adicionar funcionalidades</span>
            <button className="delete-btn">✕</button>
          </li>
        </ul>

        <div className="footer">
          <span className="count">2 tarefas restantes</span>
          <button className="clear-btn">Limpar concluídas</button>
        </div>
      </div>
    </div>
  )
}

export default App
