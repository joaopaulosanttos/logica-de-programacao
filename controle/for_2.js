/* Dois exemplos de como execultar o laço infinito usando o "For" !! 

EX01:
for (;;) {
}

EX02:
 for (; true;) {
 }
*/


// Essa forma também funciona, mas não é ideal!!
let controle = 1

for (;  controle <= 10;) {
    console.log(controle); 
    controle++
}

console.log('Fim!');