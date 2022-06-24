import React from "react";

const Comentario = () => {
    const [comentario, alteraComentario] = React.useState( [] );

    const axios = require('axios').default;

    // useEffect: responder atualização do sistema, chamando uma vez quando [], chamado sempre que atualizado sem []. Desta forma popula a "publicação" uma vez só
    React.useEffect( () => {

      axios.get('http://localhost:3001/comentario')

        .then(function (response) {

            const coments = response.data;
            alteraComentario(coments);
            console.log(response)
        })

        .catch(function (error) {
            console.log(error);
        })  

    },[] )

    return ( 
        <div>

            {
              comentario == 0 
              ?
              <p> Carregando... </p>  
              :
                <div>
                    
                    {comentario.map( u => {
                        return(
                            <>
                                <p> Usuario: @{u.nome_usuario} </p>
                                <p> Comentário: {u.comentario}</p>
                            </>
                        )
                    })}
                </div>
            }

            <hr/>
            <br/>

            <form>
                <input placeholder = "Comentar"/>
                <button> Salvar </button>
            </form>

        </div>
     );
}

 
export default Comentario;