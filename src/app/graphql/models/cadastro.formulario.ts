function separarDDDdoNumero(numero_completo){
  let numero = ''
  const tam = numero_completo.length;
  for(let i = 2; i < numero_completo.length; i++)
    numero += numero_completo[i]

    return {
      ddd: numero_completo[0] + numero_completo[1],
      numero
    }
}
export const FormularioCadastroModel = {

    data_nascimento: function(data_nascimento) {
      let data_split = data_nascimento.split('-')
    
      data_split = data_split.map( numeroString => parseInt(numeroString))
      data_nascimento = {
        ano: data_split[0],
        mes: data_split[1],
        dia: data_split[2]
      }

      return data_nascimento
    },

    contato:{
      celular:separarDDDdoNumero,
      telefone_fixo:separarDDDdoNumero
  }
}