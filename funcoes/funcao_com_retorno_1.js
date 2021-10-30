function sempreRetornaUm() {
    return 1;
    console.log('FIM!!!!') // este código não será executado! 
}

function textoOuNumero(retornaTexto) {
    return retornaTexto ? "Sou um texto!" : 123; // utilizando operador ternário! 
    // if (retornaTexto) {
    //     return "Sou um texto!";
    // } else {
    //     return 123;
    // }
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));