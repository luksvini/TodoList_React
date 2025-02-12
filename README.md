# Todo List App

Este é um aplicativo de lista de tarefas (Todo List) desenvolvido com React. Ele permite que o usuário adicione, remova, marque tarefas como concluídas e busque/filter tarefas de acordo com os critérios definidos.

## Funcionalidades

- **Adicionar Tarefas**: O usuário pode adicionar novas tarefas com uma descrição e categoria.
- **Marcar como Concluída**: As tarefas podem ser marcadas como concluídas e também desmarcadas.
- **Remover Tarefas**: As tarefas podem ser removidas da lista.
- **Busca**: O usuário pode procurar por tarefas específicas usando a barra de busca.
- **Filtros**: É possível filtrar as tarefas por categoria ou pelo estado (concluídas ou incompletas).
- **Ordenação**: As tarefas podem ser ordenadas de forma ascendente ou descendente.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir a interface do usuário.
- **React Hooks**: Usado para gerenciar o estado da aplicação e lógica de forma declarativa (useState, useEffect).
- **CSS**: Para estilizar a interface da aplicação.

## Estrutura do Projeto

- `App.jsx`: Componente principal que contém a lógica de aplicação.
- `AppLayout.jsx`: Componente responsável pela renderização da interface do usuário.
- `AppLogic.jsx`: Hook que gerencia toda a lógica do aplicativo, incluindo a manipulação de tarefas.
- `Todo.jsx`: Componente de apresentação de cada tarefa individual.
- `main.jsx`: Arquivo de entrada onde o aplicativo é renderizado.

