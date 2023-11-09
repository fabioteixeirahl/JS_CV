function run() {
    //alert('first test')
    var ok = document.getElementById('ok')
    ok.style.backgroundColor = 'grey'
    
    setTimeout(() => {
        ok.style.background = 'aquamarine';
    }, 100);

}