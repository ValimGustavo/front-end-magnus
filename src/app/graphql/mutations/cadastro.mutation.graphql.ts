import gql from 'graphql-tag'

export const cadastroMutation = {

    cadastrar: {
        mutation: function(){
            
            const query = gql`
               mutation($dados:PessoaInput!){
                    cadastrar(input:$dados){
                        primeiro_nome
                    }
                }
            `
            // console.log("query")
            // console.dir(query)
            return query
        },
        
        variable: function(dados:Object){
            const enviarParaBackend = {dados: dados} 
            // console.log("variable:", enviarParaBackend); 
            return enviarParaBackend
        }
    }

}