import gql from 'graphql-tag'

export const cadastroMutation = {

    cadastrar: {
        mutation: function(){
            return gql`
                mutation($dados:PessoaInput!) {
                    cadastrar(input:$dados){
                        primeiro_nome
                    }
                }
            `
        },
        variable: function(dados:Object){
            console.log("dados"), dados;
            
            return dados
        }
    }

}