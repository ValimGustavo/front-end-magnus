export interface Contato {
   telefone_fixo: numero_contato;
   celular: numero_contato;
   email: string;

  // constructor(
  //   celular?,
  //   email?,
  //   telefone_fixo?
  // ){}


}


interface numero_contato {
   ddd: string;
   numero: string;

  // constructor(
  //   ddd,
  //   numero
  // ){}
} 