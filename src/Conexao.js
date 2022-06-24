import React from "react";

const Conexao = () => {

    const [usuarios, alteraUsuarios] = React.useState( [] );

    const axios = require('axios').default;

    // useEffect: responder atualização do sistema, chamando uma vez quando [], chamado sempre que atualizado sem []. Desta forma popula a "publicação" uma vez só
    React.useEffect( () => {

      axios.get('http://localhost:3001/')

        .then(function (response) {

            const dados = response.data;
            alteraUsuarios(dados);
        })

        .catch(function (error) {
            console.log(error);
        })  

    },[] )
    
    


    return ( 
        <div>

            {
              usuarios == 0 
              ?
              <p> Carregando... </p>  
              :
                <div>
                    {usuarios.map( u => {
                        return(
                            <>
                                <p> Nome: {u.nome}</p>
                                <strong> Nome de Usuario: @{u.nome_usuario} </strong>
                            </>
                        )
                    })}
                </div>
            }

            <h1> Cadastro </h1>
            <p> Último usuario cadastrado: <strong> { (usuarios == 0 ? "Carregando..." : usuarios[0].nome_usuario ) } </strong></p>
            <hr/>
            <br/>

            <form>
                <input placeholder = "nome"/>
                <br/>
                <br/>
                <input placeholder = "username"/>
                <br/>
                <br/>
                <input placeholder = "senha"/>
                <br/>
                <br/>
                <button> Salvar </button>
            </form>

        </div>
     );
}
 
export default Conexao;