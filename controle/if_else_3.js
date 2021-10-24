const hora = 23;
let saudacao;

if (hora <= 11) {
    saudacao = 'Bom dia!';
} else {
    if (hora <= 17) {
        saudacao = 'Boa tarde!';
    } else {
        saudacao = 'Boa noite!';
    }
}

console.log(saudacao);