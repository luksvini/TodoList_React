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

src/
-
-`AppLayout`.jsx           # Componente responsável pelo layout geral da aplicação, onde os outros componentes são organizados. <br><br>
-`AppLogic`.jsx            # Contém a lógica principal do aplicativo, incluindo estados e funções para manipulação das tarefas. <br><br>
-`Filter.`jsx              # Componente para filtragem de tarefas (ex.: todas, completas, incompletas). <br><br>
-`Search.`jsx              # Componente para busca de tarefas. <br><br>
-`Todo.`jsx                # Componente que representa uma tarefa individual. <br><br>
-`TodoForm`.jsx            # Componente responsável pelo formulário para adicionar novas tarefas. <br><br>
-`todoFunctions`.jsx       # Funções auxiliares para manipulação das tarefas, como adicionar, completar ou remover. <br><br>


## Captura de Tela

Aqui está uma captura de tela da interface inicial do Todo List:

![Image](https://github.com/user-attachments/assets/2598b73f-c606-4c7f-8336-09c4bb22cfe6)

## Funcionalidade Principal

O usuário pode adicionar quantas tarefas quiser. Aqui um exemplo :

![Image](https://github.com/user-attachments/assets/91912758-d8b4-4ab8-a9d0-03ca95b968f0)


## Funcionalidade de Filtros

O usuário pode filtrar tarefas para visualizar apenas tarefas concluídas ou incompletas. Aqui está o resultado da filtragem por tarefas concluídas:
![Image](https://github.com/user-attachments/assets/0428b601-78a2-4ea0-9e67-fd036de7c9e8)


## Funcionalidade de Filtros Por Ordem Alfabética

O usuário pode filtrar tarefas para visualizar de forma crescente ou decrescente. Aqui está o resultado da filtragem por ordenação de forma decrescente:

![Image](https://github.com/user-attachments/assets/d3924415-0bb0-4e94-a16a-b35837502e30)

## Funcionalidade de Pesquisa

O usuário pode pesquisar por tarefas já adicionadas. Aqui está o resultado de pesquisa:

![Image](https://github.com/user-attachments/assets/db95a7d0-af56-4b19-9ef6-4e40f4a4d3c2)

