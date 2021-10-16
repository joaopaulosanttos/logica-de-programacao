// armazenando valores literais em variaveis! 
var nome = "Caneta"; 
var quantidade = 10; 
var preco = 6.4;
var imposto = 1.5; 
var precoFinal = preco + imposto; 


/* Exemplos sem utilizar as variaveis! 
    console.log("Caneta");
    console.log(10); // valor literal ! 
    console.log(6.4);
    console.log(1.5);
    console.log(7.9);
*/

// utilizando as variaveis! 
    console.log(nome);
    console.log(quantidade);
    console.log(preco);
    console.log(imposto);
    console.log(precoFinal);

    nome = "Caneta BIC";  // alterou a variavel
    console.log(nome); 

    // Criando variavel sem o "var", mas não é recomendado! 
    
    semVar = 123; 
    console.log(semVar); 

    // Atenção: A forma mais moderna de criar uma variavel é substituir a palavra "var" por "let" !!

    let maisRecomendada = 100;
    console.log(maisRecomendada); 

