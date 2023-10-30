
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    //var hour = 19

    msg.innerHTML = `Agora são ${hour} horas.`
    if (hour >= 0 && hour < 12) {
        // Bom ida
        img.src = 'morning.png'
        document.body.style.background = '#e5d0ac'
    } else if (hour >= 12 && hour <= 18) {
        // boa tarde
        img.src = 'sunset.png'
        document.body.style.background = '#cc8d63'
    } else {
        // Boa noite
        img.src = 'night.png'
        document.body.style.background = '#110648'
    }
}


