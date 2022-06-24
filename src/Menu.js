import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <div>
            | <Link to="./Inicio"> Início </Link> |   |<Link to="./Conexao"> Conexao </Link> | <Link to="./Teste"> Teste </Link> | 
             <Link to="./Comentario"> Comentario </Link>
        </div>
     );
}
 
export default Menu;