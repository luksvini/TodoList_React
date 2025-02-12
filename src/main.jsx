// Importação do StrictMode para verificar possíveis problemas de performance ou de segurança no desenvolvimento
import { StrictMode } from 'react'

// Importação da função createRoot para renderizar a aplicação no DOM
import { createRoot } from 'react-dom/client'

// Importação do componente principal da aplicação
import App from './App.jsx'

// Cria o root da aplicação e renderiza o componente App dentro do StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Renderiza o componente principal App */}
  </StrictMode>,
)
