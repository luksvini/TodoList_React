// Importa o React para poder usar JSX
import React from "react"

const Search = ({search, setSearch}) => { // Componente de pesquisa, recebe 'search' e 'setSearch' como props
  return (
    <div className="search">
        <h2>Pesquisar</h2>
        <input type="text"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}   // Atualiza o estado 'search' toda vez que o valor muda
        placeholder="Digite para pesquisar" />
    </div>
  )
}

export default Search // Exporta o componente Search