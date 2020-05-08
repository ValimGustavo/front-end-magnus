import { Data } from "../interfaces/Data.interface";
import { Pessoa } from './Pessoa.class'
import { Patente } from './Patente.class'



export interface Swordplay {
   pessoa: Pessoa;
   data_entrada: Data;
   data_saida: Data;

   patente: Patente;
   pericias:[];
}