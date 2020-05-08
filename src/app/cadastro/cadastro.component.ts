import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Pessoa } from '../../objetos/entidades/Pessoa.class'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  propriedades = [
    "nome_completo",
    ["endereco", "rua","bairro","complemento","cep","cidade"],
    ["contato", "fixo","celular","email"]
  ]


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

  preencher(){}
  ngOnInit(): void {
  }


}
