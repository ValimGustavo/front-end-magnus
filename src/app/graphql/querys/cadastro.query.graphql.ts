import gql from 'graphql-tag'

export const cadastroQuery = {

    mostrarTodos: {
        query: function(){
            return gql`
            query{
                mostrarTodos(){
                  id
                  primeiro_nome
                  data_nascimento
                  endereco{
                    rua
                    numero
                  }
                  contato {
                          telefone_fixo
                  }
                }
              }`
        }
    },

    mostrarUm: {
        query:function(){
            return gql`
                query mostrarUm($id:Int!){
                    mostrarUm(id:$id){
                        id
                        primeiro_nome
                        data_nascimento
                        endereco{
                            rua
                            numero
                        }
                        contato {
                            telefone_fixo
                        }
                    }
                }
            `
        },
        variable: function(id:number){
            return {
                id
            }
        }
    }
}