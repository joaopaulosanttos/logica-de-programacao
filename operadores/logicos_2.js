const t1 = false; 
const t2 = false;

/* Dica - > Diferentes maneiras de exibir as aspas duplas e/ou simples!
    console.log('"'); 
    console.log("'"); 
    console.log("\"");
*/
let comprarTV50 = t1 && t2; // AND
console.log('Vamos comprar a TV50 Polegadas? ', comprarTV50);

let comprarTV32 = t1 !== t2; // XOR
console.log('Vamos comprar a TV32 Polegadas? ', comprarTV32); 

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete? ', tomarSorvete); 

let ficarEmCasa = !tomarSorvete;  // NOT
console.log('Vamos ficar em casa? ', ficarEmCasa);  

