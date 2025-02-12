// Importação do React para uso do JSX e Hooks
import React from "react";

// Importação da lógica do aplicativo, que contém os estados e funções
import  useAppLogic  from "./components/AppLogic";

// Importação do layout da aplicação, onde a interface é estruturada
import AppLayout from "./components/AppLayout";

const App = () => {
  // Desestruturação do retorno de useAppLogic para acessar os estados e funções
  const {
    todos, // Lista de todas as tarefas
    search, // Texto de busca para filtrar as tarefas
    setSearch, // Função para atualizar o texto de busca
    filter, // Filtro atual das tarefas (All, Completed, Incompleted)
    setFilter, // Função para atualizar o filtro
    sort, // Tipo de ordenação das tarefas (Ascendente ou Descendente)
    setSort, // Função para atualizar a ordenação
    addTodo, // Função para adicionar uma nova tarefa
    completeTodo, // Função para marcar uma tarefa como concluída
    removeTodo, // Função para remover uma tarefa
  } = useAppLogic(); // Chama o hook que gerencia a lógica do aplicativo

  return (
    // Passa as variáveis e funções para o componente AppLayout
    <AppLayout
      todos={todos} // Lista de tarefas a ser renderizada
      search={search} // Estado de busca
      setSearch={setSearch} // Função para atualizar a busca
      filter={filter} // Filtro aplicado nas tarefas
      setFilter={setFilter} // Função para atualizar o filtro
      sort={sort} // Ordenação das tarefas
      setSort={setSort} // Função para atualizar a ordenação
      removeTodo={removeTodo} // Função para remover tarefas
      completeTodo={completeTodo} // Função para marcar tarefas como concluídas
      addTodo={addTodo} // Função para adicionar novas tarefas
    />
  );
};

// Exporta o componente App como o componente principal
export default App;
