import { Cidade } from "./Cidade.interface"

export interface Endereco {
  rua: string;
  bairro: string;
  numero: string;
  complemento: string;  
  cidade: Cidade;
  cep:string
  // constructor(
  //   rua,
  //   bairro,
  //   numero,
  //   complemento?
  // ){}
}