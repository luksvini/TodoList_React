// Importa o hook useState para gerenciar o estado no componente
import {useState} from 'react';

const TodoForm = ( {addTodo} ) => { // Declara o componente 'TodoForm' recebendo 'addTodo' como prop
    // Estados locais para o valor do input de texto e a categoria selecionada
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");


    // Função que lida com o envio do formulário
    const handleSubmit = (e) =>{
        e.preventDefault(); // Impede o envio do formulário (recarregar a página)
        if(!value || !category) return; // Se o texto ou a categoria não forem preenchidos, não faz nada
        addTodo(value, category); // Chama a função 'addTodo' passando o texto e a categoria
        setValue(""); // Limpa o campo de texto
        setCategory(""); // Limpa o campo de categoria
    }



  return <div className='todo-form'>
    <h2>Criar tarefa</h2>
    {/* Formulário para adicionar uma nova tarefa */}
    <form onSubmit={handleSubmit}>
      {/* Input para o título da tarefa */}
        <input
        type="text"
        placeholder='Digite o título'
        value={value} // Valor do campo controlado pelo estado 'value'
        onChange={(e) => setValue(e.target.value) } // Atualiza o estado 'value' conforme o usuário digita
        />
        {/* Select para escolher a categoria da tarefa */}
        <select
        value={category} // Valor do campo controlado pelo estado 'category'
        // Função para alterar o valor do select de acordo com o que é selecionado
        onChange={(e) => setCategory(e.target.value) } // Atualiza o estado 'category' conforme o usuário escolhe
        >
            <option value="">Selecione uma categoria</option>  {/* Opção vazia */}
            <option value="Trabalho">Trabalho</option> {/* Opção para "Trabalho" */}
            <option value="Pessoal">Pessoal</option> {/* Opção para "Pessoal" */}
            <option value="Estudos">Estudos</option> {/* Opção para "Estudos" */}
        </select>

        {/* Botão para enviar o formulário e criar a tarefa */}
        <button type='submit'>Criar tarefa</button>
    </form>
  </div>
}

export default TodoForm // Exporta o componente 'TodoForm' para ser usado em outros arquivos