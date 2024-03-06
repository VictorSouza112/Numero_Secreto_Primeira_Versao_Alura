alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
if (tentivas > 1) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/

/*
let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
let soma = 0;
let contador = qtdNumeros;

while (contador > 0) {
    let numero = parseInt(prompt('Digite o número:'));
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

alert('A média dos números é: ' + media);
*/

//-----------------------------------------------------------------------------------------------

/*
let meta = parseInt(prompt("Insira um número para contagem progressiva: "));
let count = 0

if (meta <= 10) {
    while (count <= meta) {
        alert(`Contador: ${count++}`);
    }
} else {
    alert("Valor muito alto para contagem progressiva.");
}
*/

//-----------------------------------------------------------------------------------------------

/*
let meta = parseInt(prompt("Insira um número para contagem regressiva: "));
let count = meta

if (meta <= 10) {
    while (count >= 0) {
        alert(`Contador: ${count--}`);
    }
} else {
    alert("Valor muito alto para contagem regressiva.");
}
*/

//-----------------------------------------------------------------------------------------------
