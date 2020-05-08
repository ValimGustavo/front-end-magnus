import { Ordem, Nivel_pericia } from "../enums/Ordem.enum";


export interface Equipamento {
     nome:string,
     tipo:Ordem,
     descricao:string,
     nivel_pericia: Nivel_pericia,
     padrao?:[]
  
}