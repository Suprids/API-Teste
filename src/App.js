import React from 'react';
import { Routes, Route} from "react-router-dom";
import Menu from './Menu';
import Inicio from './Inicio';
import Contato from './Contato';
import Conexao from './Conexao';
import Teste from './Teste';
import Comentario from './Comentario';

const App = () => {
  return (
    <div>

      <Menu/>
      <h1> Rotas no React! </h1>
      <Routes>
        <Route path="/inicio" element={< Inicio />} />
        <Route path="/conexao" element={< Conexao />} />
        <Route path="/teste" element={< Teste />} />
        <Route path="/comentario" element={< Comentario />} />
      </Routes>
      

    </div>
  );
}

export default App;
