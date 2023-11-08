function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert(`[ERRO] Verificque os dados e tente novamente!`)
    } else  {
        //window.alert('Tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.hasAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'meninoBebe.png')
            } else if ( idade < 21 ) {
                // Jovem
                img.setAttribute('src', 'jovemMenino.png')
            } else if ( idade < 50 ) {
                // Adulto
                img.setAttribute('src','homemAdulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemIdoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'meninaBebe.png')
            } else if ( idade < 21 ) {
                // Jovem
                img.setAttribute('src', 'jovemMenina.png')
            } else if ( idade < 50 ) {
                // Adulto
                img.setAttribute('src','mulherAdulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}