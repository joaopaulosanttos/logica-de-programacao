function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }; 
}; 

const d1 = criarData(01, 10, 1997); 
const d2 = criarData(03, 10, 1997); 
const d3 = criarData(08, 10, 1997); 

console.log(d1.exibir()); 
console.log(d2.exibir()); 
console.log(d3.exibir()); 

