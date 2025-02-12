// IMPORTANTE!!! PARA ATUALIZAR O ESTADO DO COMPONENTE, PRECISAMOS IMPORTAR O useState
import { useState } from "react"; // Importa o hook useState para gerenciar o estado
import "../App.css" // Importa o arquivo de estilos CSS


import Todo from "./Todo" // Importa o componente 'Todo'
import TodoForm from "./TodoForm" // Importa o componente 'TodoForm'
import Search from "./Search" // Importa o componente 'Search' para buscar tarefas
import Filter from "./Filter" // Importa o componente 'Filter' para filtrar as tarefas
 


// Função para adicionar uma nova tarefa
export const addTodo = (todos, setTodos, text, category) => {
    if (!text.trim() || !category.trim()) return; // Não adiciona a tarefa se o texto ou categoria estiverem vazios
    setTodos([ // Atualiza o estado com a nova lista de tarefas
        ...todos, // Mantém as tarefas existentes
        {
            id: crypto.randomUUID(), // Adiciona a nova tarefa com ID único
            text,
            category,
            isCompleted: false,
        },
    ]);

};

// Função para completar ou desmarcar uma tarefa como concluída
export const completeTodo = (todos, setTodos, id) => {
    setTodos( // Atualiza a lista de tarefas
        todos.map((todo) => // Mapeia todas as tarefas, ou seja, itera sobre o array 'todos'
            todo.id === id ? { //Verifica se o ID da tarefa atual (todo.id) é igual ao ID fornecido (id)
                ...todo, // Se a condição for verdadeira (ID da tarefa é igual ao fornecido), mantém todas as propriedades da tarefa atual.
                isCompleted:  // Altera o estado 'isCompleted' para o oposto: se estava 'true', vira 'false' e vice-versa.
                !todo.isCompleted 
              } : todo // Se a condição for falsa (ID não corresponde), retorna a tarefa como está, sem alteração.
            )
        );

          }
    



// Função para remover uma tarefa
export const removeTodo = (todos, setTodos, id) => {
  // Atualiza o estado com uma nova lista de tarefas, filtrando a tarefa que possui o ID correspondente
    setTodos(
      todos.filter((todo) =>
      todo.id !== id)); // Se o ID da tarefa for diferente do ID fornecido, a tarefa é mantida
};

// Função principal do aplicativo
export const App = () => {
  // Estado para armazenar a lista de tarefas
    const [todos, setTodos] = useState([
        {
            id:1,
            text: "criar funcionalidade x no sistema",
            category: "Trabalho",
            isCompleted: false,
          },
          {
            id:2,
            text: "Ir pra academia",
            category: "Pessoal",
            isCompleted: false,
          },
          {
            id:3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
          }
    ])

    // Estado para armazenar o texto da pesquisa
    const [search, setSearch] = useState("")

    // Estado para armazenar o filtro de tarefas (Todas, Concluídas, Incompletas)
    const [filter, setFilter] = useState("All") 

    // Estado para armazenar a ordem de ordenação das tarefas (Ascendente ou Descendente)
    const [sort, setSort] = useState("Asc")

    return (
        <div className="app">
     
     
         <h1>Lista de Tarefas</h1>
         <div className="todo-list">
          {/* Componente de pesquisa para filtrar tarefas */}
           <Search search={search} setSearch={setSearch}/>
           {/* Componente de filtro para filtrar tarefas por categoria */}
           <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
           {/* Renderiza as tarefas após aplicar filtros e ordenações */}
           {todos
           .filter((todo) =>  // Filtra as tarefas conforme o filtro selecionado (All, Completed, Incomplete)
           filter ==="All" ? true  // Se o filtro for "All", exibe todas as tarefas
           : filter === "Completed" ? todo.isCompleted   // Se o filtro for "Completed", exibe apenas as tarefas completadas
           : ! todo.isCompleted // Se o filtro for "Incompleted", exibe apenas as tarefas não completadas
           )
           
     
           //Filtro de busca
           .filter((todo) => 
           todo.text.toLocaleLowerCase()
           .includes(search.toLocaleLowerCase()) // Filtra as tarefas pelo texto de pesquisa
           )
           // Ordenação
           .sort((a, b) =>  // Ordena as tarefas em ordem alfabética
           sort === "Asc" ? a.text.localeCompare(b.text) // Se o filtro de ordenação for "Asc", ordena em ordem crescente
           : b.text.localeCompare(a.text)) // Se o filtro de ordenação for "Desc", ordena em ordem decrescente
     
     
           .map((todo) =>( // Mapeia as tarefas para renderizar um componente 'Todo' para cada uma
             // Propriedade todo tem o valor do todo objeto e a key é o id
             <Todo key={todo.id} 
             todo={todo} 
             removeTodo={removeTodo} 
             completeTodo={completeTodo}
             />
           ))}
         </div>
     
           {/* Componente de formulário para adicionar novas tarefas */}
         <TodoForm addTodo={(text, category) => addTodo(todos, setTodos, text, category)} />
        </div>
       )
}





