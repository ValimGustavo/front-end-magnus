import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Pessoa } from '../../objetos/entidades/Pessoa.class'
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  

  constructor(
    private cepService:CepService
  ){}

  //MELHORAR IMPLEMENTAÇAO 
  propriedades = [
    "nome_completo", "data_nascimento",
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
    nome_completo: new FormControl(''),
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
  teste(){
    for(let propriedade of this.propriedades){
      console.log("propriedade", propriedade)
      if( typeof propriedade == "object" ){
        for(let i = 1; i < propriedade.length; i++ ){
          console.log("propriedade", propriedade[i])
          console.log(this.cadastroControl.get(propriedade[0]).get(propriedade[i]).value)
        }
      }
      else {
      console.log(this.cadastroControl.get(propriedade).value)
      }
    }
  }

  //TODO: REMOVER NA VERSAO FINAL
  preencher(){
    this.cadastroControl.setValue({
      nome_completo: "nome completo",
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
