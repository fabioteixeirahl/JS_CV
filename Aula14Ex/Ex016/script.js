function run() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value == '' || fim.value == '' || passo.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        var nInicio = Number(inicio.value)
        var nFim = Number(fim.value)
        var nPasso = Number(passo.value)
        if (nPasso == 0) { 
            nPasso = 1
            alert('Passo inválido. Considerado PASSO 1')
        }
        
        var resultado = ''
       
        for( var i = nInicio; i <= nFim; i += nPasso) {
            resultado += `${i} \u{1F449}` 
        }

        res.innerHTML = `resultado \u{1F3C1}`
    }
}