var peso = 50
var altura = 1.78
var imc = peso/(altura * altura)

if ( imc < 18.5){
    console.log(`Com a altura de  ${altura} e o peso de ${peso} voce ta só o pó da rabiola`)
}
else if( imc >=18.5 & imc <= 25.5 ){
    console.log(`pesando ${peso} e medindo ${altura} ce ta suavao`)

}
else{
    console.log('ta gordao')
}

console.log(imc)
