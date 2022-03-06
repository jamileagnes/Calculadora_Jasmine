var Calculadora = {
    adicionar: function(num1, num2){
        if(isNaN(num1) | isNaN(num2)){
            return 0;
        }
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 + num2;
    },
    subtrair: function(num1, num2){
        if(isNaN(num1) | isNaN(num2)){
            return 0;
        }
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 - num2;
    },
    dividir: function(num1, num2){
        if(isNaN(num1) | isNaN(num2)){
            return 0;
        };

        if((num1 == 0) | (num2 == 0)){
            return 'Erro';
        };

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 / num2;
    },
    multiplicar: function(num1, num2){
        if(isNaN(num1) | isNaN(num2)){
            return 0;
        };

        if((num1 == 0) | (num2 == 0)){
            return 1;
        };

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return num1 * num2;
    },
};

if(typeof module !== 'undefined'
        && typeof module.exports !== 'undefined'){
            module.exports = Calculadora;
}