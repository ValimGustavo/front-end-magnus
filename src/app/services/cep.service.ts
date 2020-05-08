import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CepService {

    cepPesquisado:number;
    url = `viacep.com.br/ws/${this.cepPesquisado}/json/`


    buscarCep(cepPesquisado){

    }

}