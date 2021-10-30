// #01 -> função COM parêmtros e COM retorno! 
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é: ${somar(30, 56)}`);

// #02 -> função COM parêmtros e SEM retorno! 
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #03 -> função SEM parêmtros e COM retorno!
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #04 -> função SEM parêmtros e SEM retorno!
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();