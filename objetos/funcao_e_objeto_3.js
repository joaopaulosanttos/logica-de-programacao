// Função Connstrutora (Classe) -> Objeto

function Data(dia = 01, mes = 10, ano = 1997) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d1 = new Data();
d1.ano = 2000; 
const d2 = new Data(24, 12, 2022);
const d3 = new Data(31, 12, 2021);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.log(d1);
console.log(d2);
console.log(d3);

