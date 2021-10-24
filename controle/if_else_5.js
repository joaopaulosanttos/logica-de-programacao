const hora = 10;
let saudacao;

// Neste exemplo abaixo o código funciona normamlmente, 
// porém, essa maneira de escrever o código não é muito recomendada! 

if (hora <= 11) {
    saudacao = 'Bom dia!';
} else {
    if (hora <= 17) {
        saudacao = 'Boa tarde!';
    } else {
        if (hora <= 22) {
            saudacao = 'Boa noite!';
        } else {
            saudacao = 'Muito tarde!';
        }
    }
}

console.log(saudacao);