describe("Suite testes de divisao", function(){
    var Calculadora = require('../../src/js/calculadora.js');

    it('Deve retornar 6 para 2 e 3', function(){
        expect(Calculadora.multiplicar(2,3)).toEqual(6);
    });

    it('Deve retornar 9 para 3 e 3 no formato texto', function(){
        expect(Calculadora.multiplicar('3','3')).toEqual(9);
    });

    it('Deve retornar 4.5 para 1.5 e 3', function(){
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it('Deve retornar 1 ao dividir por 0', function(){
        expect(Calculadora.multiplicar(10, 0)).toEqual(1);
        expect(Calculadora.multiplicar(10, '0')).toEqual(1);
    });

    it('Deve retornar 0 quando valor 1 não for numérico', function(){
        expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
    });

    it('Deve retornar 0 quando valor 2 não for numérico', function(){
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
    });
});