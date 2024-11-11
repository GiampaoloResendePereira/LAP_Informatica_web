// EditarParametroValidation.js

/**
 * Verifica se o valor é nulo, indefinido ou uma string vazia.
 * @param {any} value - Valor a ser verificado.
 * @returns {boolean} - Retorna true se o valor for nulo ou vazio, caso contrário, false.
 */
export function isNullOrEmpty(value) {
    return value === null || value === undefined || value === '';
  }
  
  /**
   * Valida o objeto de parâmetros de frete.
   * @param {Object} parametro - Objeto que contém os parâmetros de frete.
   * @returns {boolean} - Retorna true se todos os parâmetros são válidos, caso contrário, false.
   */
  export function validateParametro(parametro) {
    const { valorMenos1Kg, valor1a3Kg, valor3a8Kg, valor8a12Kg, valorPorKm } = parametro;
  
    // Verifica se algum dos campos é nulo, vazio ou um valor inválido
    if (
      isNullOrEmpty(valorMenos1Kg) ||
      isNullOrEmpty(valor1a3Kg) ||
      isNullOrEmpty(valor3a8Kg) ||
      isNullOrEmpty(valor8a12Kg) ||
      isNullOrEmpty(valorPorKm)
    ) {
      return false;
    }
  
    // Verifica se os valores são numéricos e maiores ou iguais a zero
    if (
      !isNumber(valorMenos1Kg) || valorMenos1Kg < 0 ||
      !isNumber(valor1a3Kg) || valor1a3Kg < 0 ||
      !isNumber(valor3a8Kg) || valor3a8Kg < 0 ||
      !isNumber(valor8a12Kg) || valor8a12Kg < 0 ||
      !isNumber(valorPorKm) || valorPorKm < 0
    ) {
      return false;
    }
  
    // Verifica que os valores estão em ordem crescente
    if (!(valorMenos1Kg <= valor1a3Kg && valor1a3Kg <= valor3a8Kg && valor3a8Kg <= valor8a12Kg)) {
      return false;
    }
  
    return true; // Retorna true se todas as validações forem bem-sucedidas
  }
  
  /**
   * Verifica se o valor fornecido é um número.
   * @param {any} value - Valor a ser verificado.
   * @returns {boolean} - Retorna true se o valor é um número, caso contrário, false.
   */
  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  