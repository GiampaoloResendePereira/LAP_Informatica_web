const params = [
    'nome',
    'cpf',
    'email',
    'telefone',
    'dataNascimento',
    'senha',
    'chave',
  ];
  
  export function isNullOrEmpty(value) {
    return value === null || value === '' || value === undefined;
  }
  
  export function validateAula(aula) {
    return params.some((param) => {
      return isNullOrEmpty(aula[param]);
    });
  }