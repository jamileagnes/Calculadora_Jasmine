describe("Suite testes de adiçao", function(){
    var Calculadora = require('../../src/js/calculadora.js');

    it('Deve retornar 5 para 2 e 3', function(){
        expect(Calculadora.adicionar(2,3)).toEqual(5);
    });

    it('Deve retornar 6 para 9 e -3 no formato texto', function(){
        expect(Calculadora.adicionar('9','-3')).toEqual(6);
    });

    it('Deve retornar 4.5 para 1.5 e 3', function(){
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });

    it('Deve retornar 0 quando valor 1 não for numérico', function(){
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    });

    it('Deve retornar 0 quando valor 2 não for numérico', function(){
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    });
});