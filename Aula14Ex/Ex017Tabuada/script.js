function run() {
    var num = document.getElementById('num')
    var numero = Number(num.value)
    var resultado

    if (num.value == '') {
        alert('Por favor, escreva um número!')
    } else {
        var res = document.getElementById('res')
        res.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero*i}`
            //item.value = `res$(i)`
            res.appendChild(item)
        }
    }
}
