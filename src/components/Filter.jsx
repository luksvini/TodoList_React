// Importa o React para poder usar JSX
import React from 'react'

const Filter = ({filter, setFilter, setSort}) => { // Componente de filtro, recebe 'filter', 'setFilter' e 'setSort' como props
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className="filter-options"> {/* Contém as opções de filtro e ordenação */}
          <div>
            <p>Status:</p>
            <select value={filter} onChange={(e) =>setFilter(e.target.value)} > {/* Dropdown para selecionar o status de filtro */}
                <option value="All">Todos</option> {/* Opção para mostrar todas as tarefas */}
                <option value="Completed">Completas</option> {/* Opção para mostrar tarefas completas */}
                <option value="Incompleted">Incompletas</option> {/* Opção para mostrar tarefas incompletas */}
                </select>
        </div>  

        <div>
            <p>Ordem</p>
            <button onClick={() => setSort("Asc") }>A-Z</button> {/* Botão para ordenar em ordem alfabética crescente (A-Z) */}
            <button onClick={() => setSort("Desc")}>Z-A</button>  {/* Botão para ordenar em ordem decrescente (Z-A) */}
        </div>
    </div>
    </div>
  )
}

export default Filter // Exporta o componente Filter