//Condicionais//
//if and eslse//
/*var nome = 'Everton';
if (nome === 'JC'){
    console.log('Legal! esse e seu nome');}
else {
    console.log ('Que pena, nao e seu nome');
}*/


//deu errado//
/*var nome = 'Everton';
if (nome === 'JC') {
    console.log('Legal! seu nome JC');
}
else if (nome === 'Ti');
{
    console.log('Que pena, seu nome nao e Ti');
} else {console.log('Quepena');
}*/


//Uso do Switch é mais recomendado caso aja muitos if else//
/*var nome ='ti'
switch (nome) {
    case 'JC':
    console.log('Legal! seu nome JC');
    break;

    case 'Everton':
        console.log('Seu nome e Everton e nao JC');
        break;

    default:
            console.log('que pena voce nao e Everton nem JC');
            break;
}*/


//Estrutura de repetição, Laço for (por)//

/*var tabuada = 5
for (var i = 0; i < 100; i++){
    console.log('Valor de' + tabuada + 'x' + i + '=' + tabuada * i);
}*/


/*var numeroSortido = 10;
for (var i = 0; i < 100; i++){
    if (numeroSortido === i){
        console.log('Numero encontardo');
        break;
    }
}*/

//Estrotura de repetição While (enquanto)//
//vai continuar exibindo, pois a inf é o inverso de false//
//+= ele igual a ele mesmo +1
/*var achou = false;
while (!achou)
{
    console.log('achou');
}*/

/*var achou = false;
var numeroSorteado = 10
var possivelvalor = 0;

while (!achou)
{
    possivelvalor += 1;
    if (numeroSorteado === possivelvalor){
        achou = true;
    } else {
        console.log('Possivel valor nao corresponde ao numero sorteado ' + possivelvalor);
    }
}*/

//Função - estrutura que é usada mais de uma vez//

//exemplo 1//

/*function soma(operadoA, operadorB){
var resultadoC = operadoA + operadorB;
return resultadoC;
}
var resultadoDaSoma = soma (1, 2);
console.log(resultadoDaSoma);*/

//exemplo 2//

/*function soma(operadoA, operadorB){
    var resultadoC = operadoA + operadorB;
    return resultadoC; 
}
function olaGama (nome){
    console.log ('Ola gama! voce é o' + nome)
}
    var resultadoDaSoma = soma (1, 2);
    var resultadoDaNovaSoma = soma (20, 2);

    console.log(resultadoDaSoma);
    console.log(resultadoDaNovaSoma);

    var resultado = olaGama ('everton');
    onsole.log(resultado);*/

    //Classe//

/*class matematica {
    soma(valorA, valorB) {
        return valorA +  valorB;
    }
    subtracao (valorA, valorB) {
        return valorA - valorB;
    }
 }
var instanciamatematica = new matematica();
var resultado = instanciamatematica.soma (4,7);
console.log(resultado);*/

