// Importa o React para usar funcionalidades do React
import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => { // Declara o componente 'Todo' recebendo 'todo', 'removeTodo', e 'completeTodo' como props
  return (
    <div className="todo" 
    // Aplica o estilo de texto riscado se a tarefa estiver completada
    style={{textDecoration: todo.isCompleted? "line-through" :"" }}>
          <div className="content">
             {/* Exibe o texto da tarefa */}
            <p>{todo.text}</p>
            {/* Exibe a categoria da tarefa */}
            <p className="categoria">({todo.category}) </p>
          </div>

          {/* Botões */}
          <div>
          <button className='complete'onClick={() => completeTodo(todo.id)}>Completar</button>
          <button className='remove' onClick={() => removeTodo(todo.id)} aria-label="Remover tarefa">X</button>
          </div>

        </div>
  )
}

export default Todo