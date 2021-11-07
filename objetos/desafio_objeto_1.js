// Objeto data 
// Atributos: dia, mes e ano
// Método: exibir -> "dia/mes/ano"

const nascimento = {
    dia: 01,
    mes: 10,
    ano: 1997,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

nascimento.dia = 03; 

console.log(nascimento.exibir());
