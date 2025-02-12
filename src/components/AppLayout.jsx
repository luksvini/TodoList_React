
import React from 'react'

// Importando os componentes para realizar as funções
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";
import Search from "../components/Search";
import Filter from "../components/Filter";


const AppLayout = ({
    todos, // Lista de tarefas que será exibida
    search, // O valor de pesquisa, para filtrar as tarefas
    setSearch, // Função para atualizar o valor da pesquisa
    filter, // O filtro atual (All, Completed, Incompleted)
    setFilter, // Função para atualizar o filtro
    sort, // O tipo de ordenação (Asc, Desc)
    setSort, // Função para atualizar o tipo de ordenação
    removeTodo, // Função para remover uma tarefa
    completeTodo, // Função para marcar uma tarefa como completa
    addTodo, // Função para adicionar uma nova tarefa
})  => 
    (
    <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list"> {/*Contem a lista de tarefas*/}
      <Search search={search} setSearch={setSearch} /> {/* Componente de pesquisa que permite ao usuário filtrar as tarefas */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} /> {/* Componente de filtro e ordenação */}
      {todos // Mapeia todas as tarefas para renderizar os componentes Todo
        .filter((todo) => // Aplica o filtro de status baseado no estado 'filter'
          filter === "All" // Se o filtro for "All", mostra todas as tarefas
            ? true // Retorna todas as tarefas
            : filter === "Completed" // Se o filtro for "Completed", mostra apenas as tarefas completas
            ? todo.isCompleted // Verifica se a tarefa está completa
            : !todo.isCompleted  //Se for "Incompleted", mostra apenas as tarefas incompletas
        )
        .filter((todo) => // Aplica o filtro de pesquisa baseado no texto digitado
          todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()) // Verifica se o texto da tarefa contém o valor da pesquisa
        )
        .sort((a, b) => // Ordena as tarefas com base na ordem de A-Z ou Z-A
          sort === "Asc" // Se o tipo de ordenação for Ascendente (A-Z)
          ? a.text.localeCompare(b.text)  // Ordena as tarefas em ordem alfabética ascendente
          : b.text.localeCompare(a.text) // Se o tipo for Descendente (Z-A), ordena em ordem decrescente
        )
        .map((todo) => ( // Para cada tarefa, renderiza o componente Todo
          <Todo
            key={todo.id} // Cada tarefa precisa de uma chave única
            todo={todo} // Passa o objeto da tarefa
            removeTodo={removeTodo} // Função para remover a tarefa
            completeTodo={completeTodo} // Função para marcar a tarefa como completa
          />
        ))}
    </div>
    <TodoForm addTodo={addTodo} /> {/* Componente para adicionar novas tarefas, recebe a função addTodo */}
  </div>
);

export default AppLayout // Exporta o componente AppLayout para ser usado em outros lugares