import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GraphQLService } from '../graphql/graphql.service'
import { CepService } from '../services/cep.service';
import { FormularioCadastroModel } from '../graphql/models/cadastro.formulario'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  

  constructor(
    private cepService:CepService,
    private  graphQLService : GraphQLService ,
  ){}


  async fazerRequest(){
      console.log("fazer request")
      return await this.graphQLService.chamadaDeTesteComVariavel()
  }
  //MELHORAR IMPLEMENTAÇAO 
  propriedades = [
    ["nome", "primeiro_nome", "sobrenome"], "data_nascimento",
    ["endereco", "rua","bairro","complemento","cep","cidade"],
    ["contato", "fixo","celular","email"]
  ]

  async buscarCep(){
    let cep = this.cadastroControl.get("endereco").get("cep").value
    console.log(cep)
    let dadosVindoDaApi = await (await this.cepService.buscarCep(cep))
    .subscribe(respostaApi => this.preencherEndereco(respostaApi))
  }

//TODO: TRANSFORMAR EM CLASSE
  cadastroControl = new FormGroup({
    nome: new FormGroup({
      primeiro_nome: new FormControl(''),
      sobrenome: new FormControl('')
    }),
    data_nascimento: new FormControl(''),
    endereco: new FormGroup({
      rua: new FormControl(''),
      bairro: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      cep: new FormControl(''),
      cidade: new FormControl(''),
    }),
    contato: new FormGroup({
      celular: new FormControl(''),
      fixo: new FormControl(''),
      email: new FormControl('')
    })      
  })

  //TODO: REMOVER NA VERSAO FINAL
  criarObjetoComDadosDoFormulario(){
    const dados = {}
    for(let propriedade of this.propriedades){
      if( typeof propriedade == "object" ){
        dados[propriedade[0]] = this.cadastroControl.get(propriedade[0]).value
      }
      else {
        let prop_e_valor = this.cadastroControl.get(propriedade).value;
        dados[propriedade] = prop_e_valor
      }
    }
    console.log(dados)
    
    const dadosModelados = {
      contato:{
        telefone_fixo: FormularioCadastroModel.contato.telefone_fixo(dados["contato"].fixo),
        celular: FormularioCadastroModel.contato.celular(dados['contato'].celular),
        email: dados["contato"].email
      },
      data_nascimento : FormularioCadastroModel.data_nascimento(dados['data_nascimento']),
      nome: dados["nome"],
      endereco: dados["endereco"]
    }
    return dadosModelados
  }

  salvarCadastro(){
    console.log("salvar cadastro")
    let formulario_preenchido = this.criarObjetoComDadosDoFormulario()
    console.log("form", formulario_preenchido);
    
    const resposta = this.graphQLService.salvarBackend(formulario_preenchido)
    console.log("resposta ", resposta);
    
  }

  //TODO: REMOVER NA VERSAO FINAL
  preencher(){
    this.cadastroControl.setValue({
      nome:{
        primeiro_nome:"primeiro nome",
        sobrenome: "sobrenome"
      },
      data_nascimento: "9999-03-03",
      endereco: {
        rua: "rua",
        bairro: "bairro",
        numero: "315",
        complemento: "complemento",
        cep: "15632435",
        cidade: "cidade",
      },
      contato: {
        celular: "39685236",
        fixo:"36523652",
        email: "email@email"
      }
  })
  }
  ngOnInit(): void {
  }

  preencherEndereco(respostaApi){
    console.log(respostaApi)
    this.cadastroControl.patchValue({
      endereco:{
        rua: respostaApi.logradouro,
        cidade: respostaApi.localidade,
        bairro: respostaApi.bairro,
        complemento: respostaApi.complemento
      }
    })
  }




}
