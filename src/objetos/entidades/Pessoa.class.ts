import { Data } from "../interfaces/Data.interface";
import { Endereco } from "../interfaces/Endereco.interface";
import { Contato } from "../interfaces/Contato.interface";
import { Nome } from "../interfaces/Nome.interface";

export interface Pessoa {
     nome: Nome;
     data_nascimento: Data;
     endereco: Endereco;
     contato: Contato; //telefone, celular, email

    // constructor(
    //   nome,
    //   data_nascimento,
    //   endereco,
    //   contato
    // ){
    //   this.nome = nome;
    //   this.data_nascimento = data_nascimento;
    //   this.endereco = endereco;
    //   this.contato = contato;
    // }

    // nomeCompleto(){
    //   return `${this.nome.nome} ${this.nome.complemento} ${this.nome.sobrenome}`
    // }
}

