 let letra = 'i'
if (/^[a-zA-Z]$/.test(letra)){
switch (letra.toLowerCase()){

    case 'a':
    case 'e':
    case 'i':
    case '0':
    case 'u':
        console.log(`a letra ${letra} é uma vogal`) 
        break     
    default:
        (console.log('a letra é uma consoante'))          
}
}

else{
    console.log('insira apenas letras')
}