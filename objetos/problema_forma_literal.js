// Não é recomendado usar uma duplicação de códigos assim: 

const d1 = {
    dia: 01,
    mes: 10,
    ano: 1997,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
const d2 = {
    dia: 03,
    mes: 10,
    ano: 1997,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
const d3 = {
    dia: 08,
    mes: 10,
    ano: 1997,
    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());