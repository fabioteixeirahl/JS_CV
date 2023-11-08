


function change() {
    var b1 = document.getElementById('b1')
    var b2 = document.getElementById('id')
    b1.addEventListener('mouseenter', change)
    var stateB1 = b1.value
    
    if(b1.value === stateB1) {
        b1.value = b2.value
        b2.value = stateB1
    }
}

function sim () {
    change()
}

function nao() {
    print('não')
}

function print(n) {
    alert(n)
}