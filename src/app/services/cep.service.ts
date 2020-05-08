import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private httpClient:HttpClient
  ){}

  criarUrl(cep){
    return `https://viacep.com.br/ws/${cep}/json/`
  }

  async buscarCep(cepBuscado:number){
    let url = this.criarUrl(cepBuscado)
    console.log("url completa",url)
    return await this.httpClient.get(url)
  }

  
}
