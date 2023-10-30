var idade = 80
console.log(`A sua idade é ${idade}!`)
if ( idade < 18 ) {
    console.log('Não pode votar!')
} else if (idade >= 18 && idade < 67) {
    console.log(`Obrigatório vontar!`)
} else {
    console.log(`Já não é obrigatório vontar!`)
}