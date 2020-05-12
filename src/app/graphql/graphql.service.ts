import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag';
import { strict } from 'assert';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { cadastroQuery } from './querys/cadastro.query.graphql' 
import { cadastroMutation } from './mutations/cadastro.mutation.graphql'
import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable({
    providedIn:'root'
})
export class GraphQLService {

    private querySubscription: Subscription
    private loading: boolean
    private data:any


    constructor(
        private apolloClient:Apollo
    ){}

    async chamadaDeTeste(){
       let queryRef = this.apolloClient.watchQuery({
           query:cadastroQuery.mostrarTodos.query()
       }).valueChanges
       .subscribe(respostaAPI => console.log(respostaAPI.data))
    }

    async chamadaDeTesteComVariavel(){
        let queryRef = this.apolloClient.watchQuery({
            query: cadastroQuery.mostrarUm.query(),
            variables: cadastroQuery.mostrarUm.variable(1)
        }).valueChanges
        .subscribe(respostaBackend => {
            console.log(respostaBackend.data)
        })
    }

    async salvarBackend(dados_formulario:Object){
       
       return await this.apolloClient.mutate({
            mutation: cadastroMutation.cadastrar.mutation(),
            variables: {dados: cadastroMutation.cadastrar.variable(dados_formulario) }
        }).subscribe( respostaAPI => {
            console.log("resposta", respostaAPI.data)
            return respostaAPI.data
        })
    }

}