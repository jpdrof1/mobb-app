export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const telefoneDDIMask = (value) => {
  return value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "+$1 $2")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
};

export const validaCPF = (cpf) => {
  var Soma = 0
  var Resto

  var strCPF = String(cpf).replace(/[^\d]/g, '')
  
  if (strCPF.length !== 11)
     return false
  
  if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    ].indexOf(strCPF) !== -1)
    return false

  for (let i=1; i<=9; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

  Resto = (Soma * 10) % 11

  if ((Resto === 10) || (Resto === 11)) 
    Resto = 0

  if (Resto !== parseInt(strCPF.substring(9, 10)) )
    return false

  Soma = 0

  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

  Resto = (Soma * 10) % 11

  if ((Resto === 10) || (Resto === 11)) 
    Resto = 0

  if (Resto !== parseInt(strCPF.substring(10, 11) ) )
    return false

  return true
}

export const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const validaSenhaForte = (value) => {
  let retorno = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{7,}$/;
  return retorno.test(value);
}

export const mascaraMoeda = (valor) => {
  const onlyDigits = valor
    .split("")
    .filter(s => /\d/.test(s))
    .join("")
    .padStart(3, "0")
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
  return formataValorBR(digitsFloat)
}

export function formataValorBR(valor, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(valor)
}


export const apenasNumeros = (v) => {
  return v.replace(/\D/g,"");
}


export const mascaraMoedaParaDecimalSQL = (valor) => {
  valor = valor.replace("R$", "");
  valor = valor.replace(/\.|\-/g, '');
  return valor.replace(",", ".").trim();
}

export const dataFormatadaBR = (value) =>{
  var data = new Date(value),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}

export const dataFormatadaUS = (value) =>{
  var data = new Date(value),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return anoF+"-"+mesF+"-"+diaF;
}