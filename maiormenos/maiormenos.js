console.log("VAMOS COMEÇAR:");

const nummaior = parseFloat(prompt("Digite o primeiro número:"))
const num2 = parseFloat(prompt("Digite o segundo número:"))
const num3 = parseFloat(prompt("Digite o terceiro número:"))


console.log("CLASSIFICAÇÃO DE MAIOR PARA MENOR");



if (nummaior > num2 && nummaior > num3){
    console.log("O MAIOR NÚMERO QUE VOCÊ DIGITOU É:", nummaior );
}
else if (num2 > nummaior && num2 > num3) {
    console.log("O MAIOR NÚMERO QUE VOCÊ DIGITOU É:", num2 );
}
else {
    console.log("O MAIOR NÚMERO QUE VOCÊ DIGITOU É:", num3 );
}



