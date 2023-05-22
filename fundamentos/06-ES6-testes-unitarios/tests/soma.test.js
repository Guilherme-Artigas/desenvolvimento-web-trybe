const soma = require('../src/soma');

describe('Rodada de testes 01...', () => {
  it('Testando o retorno da função de soma:', () => {
    expect(soma(1, 2)).toBe(3);
  });
});
