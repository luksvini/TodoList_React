// Importa o hook useState para gerenciar o estado
import {useState} from 'react' 

// Importa funções auxiliares para manipulação das tarefas
import { addTodo, completeTodo, removeTodo } from '../components/todoFunctions'  

export const AppLogic = () => {  // Função que contém toda a lógica do app
  const[todos, setTodos] = useState([ // Estado 'todos' armazena as tarefas, 'setTodos' atualiza esse estado
    {
      // Tarefas de exemplo inicial
        id: 1,
        text: "criar funcionalidade x no sistema", // Texto da tarefa
        category: "Trabalho", // Categoria da tarefa
        isCompleted: false, // Se a tarefa foi completada ou não
      },
      {
        id: 2,
        text: "Ir pra academia",
        category: "Pessoal",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false,
      },
  ])

    const [search, setSearch] = useState(""); // Estado 'search' para armazenar o texto de busca
    const [filter, setFilter] = useState("All"); // Estado 'filter' para armazenar o tipo de filtro (All, Completed, Incompleted)
    const [sort, setSort] = useState("Asc"); // Estado 'sort' para armazenar o tipo de ordenação (Asc, Desc)

  
    return {
      todos, // Retorna o estado 'todos'
      setTodos, // Retorna a função 'setTodos' para atualizar o estado 'todos'
      search, // Retorna o estado 'search'
      setSearch, // Retorna a função 'setSearch' para atualizar o estado 'search'
      filter, // Retorna o estado 'filter'
      setFilter, // Retorna a função 'setFilter' para atualizar o estado 'filter'
      sort, // Retorna o estado 'sort'
      setSort, // Retorna a função 'setSort' para atualizar o estado 'sort'
      addTodo: (text, category) => addTodo(todos, setTodos, text, category), // Função para adicionar uma tarefa
      completeTodo: (id) => completeTodo(todos, setTodos, id), // Função para completar uma tarefa
      removeTodo: (id) => removeTodo(todos, setTodos, id), // Função para remover uma tarefa
  
}
};

export default AppLogic // Exporta a função AppLogic