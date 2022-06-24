import React from "react";


const Teste = () => {



    const [post, alteraPost] = React.useState( [] );
    const [comentario, alteraComentario] = React.useState( [] );
    const moment = require('moment');
    moment.locale("en", null);

    const axios = require('axios').default;

    const cadastroUsuario = (e) => {

        e.preventDefault()

        const nome = document.getElementById("inputNome").value;
        const nome_usuario = document.getElementById("inputNickName").value;
        const senha = document.getElementById("inputSenha").value;
        const confirmaSenha = document.getElementById("inputConfirma").value;
        
        const obj = {
            nome: nome,
            nome_usuario : nome_usuario,
            senha : senha
        }

        if(obj.nome.trim() == " "){
            alert("Nome não cadastrado.")
            
        }
        if(obj.nome_usuario.trim() == ""){
            alert("Nome usuario não cadastrado.")
            
        }
        
        if(obj.senha.trim() == ""){
            alert("Senha não cadastrada")
            
        }
        if(confirmaSenha.trim() == "" ){
            alert("Senha não confirmada!")
            
        }
        if(confirmaSenha.trim() != obj.senha.trim()){
            alert("Senha confirmada incorreta!")
            
        }

        axios.post('http://localhost:3001/usuario', obj)

        .then(function (response) {

            //console.log(response.status == 200)

alert("cadastro feito com sucesso")

        })

        .catch(function (error) {

alert("nome de usuario já existente")

        })  


    }

   /* const cadastroPostagem = (e) => {

        e.preventDefault()

        const descricao = document.getElementById("inputDescricao").value;
        const postagem = document.getElementById("inputPostagem").value;
        

        

        const obj = {
            descricao : descricao,
            postagem : postagem 
        }

        axios.post('http://localhost:3001/postagem', obj)

        .then(function (response) {

            console.log(response)
        })

        .catch(function (error) {
            console.log(error);
        })  


    }*/

    // useEffect: responder atualização do sistema, chamando uma vez quando [], chamado sempre que atualizado sem []. Desta forma popula a "publicação" uma vez só
    React.useEffect( () => {

      axios.get('http://localhost:3001/post')

        .then(function (response) {

            const postagem = response.data;
            alteraPost(postagem);
            console.log(response)
        })

        .catch(function (error) {
            console.log(error);
        })  

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

            <div>

                {   post == 0 
                    ?
                    <p> Carregando... </p>  
                    :
                    <div>
                        
                        {post.map( u => {

                            const data = moment(u.feito_em).locale("br").format("MMM Do YY");



                            return(
                                <>
                                    <p> Nome: {u.Nome}</p>
                                    <p> Nome de Usuario: @{u.UserName}</p>
                                    <p> {u.descricao} </p>
                                    <strong> <br/><img style={{width: 300}} src= {`${u.PUBLICACAO}`}/> </strong> <br/>
                                    <strong> {data} </strong> <br></br>
                                    <button> Comentar </button> 
                                    <div>
                        {   comentario == 0 
                            ?
                            <p> Carregando... </p>  
                            :
                            <div>
                                
                                {comentario.map( c => {
                                    if (u.ID == c.ID){
                                        return(
                                            <>
                                                <p> Usuario: @{c.nome_usuario} </p>
                                                <p> Comentário: {c.comentario}</p>
                                            </>
                                        )
                                    }
                                })}
                            </div>
                        }
                        </div>
                                </>
                            )
                        })}
                    </div>
                }
            </div>


            <hr/>
            <br/>

            <form onSubmit={(e) => cadastroUsuario(e)}>
                <h4> CADASTRO </h4>
                <input id="inputNome" placeholder = "Nome"/>
                <br/>
                <br/>
                <input id="inputNickName" placeholder = "UserName"/>
                <br/>
                <br/>
                <input id="inputSenha" placeholder = "Senha"/>
                <input id="inputConfirma" placeholder = "Confirma Senha"/>
                <button> Salvar </button>
            </form>
            {/*onSubmit={(e) => cadastroPostagem(e)}*/}
            <form>
                <h4> POSTAGEM </h4>
                <br/>
                <input id="inputDescricao" placeholder = "Descrição"/>
                <br/>
                <br/>
                <input id="inputPostagem" placeholder = "Imagem"/>
                <br/>
                <br/>
                <button> Salvar </button>
            </form>

        </div>
     );
}
 
export default Teste;