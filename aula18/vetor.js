let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log( '')
valores.sort()
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log( '')
let n = 5
let pos = valores.indexOf(n)


if (pos == -1) {
    console.log(`O valor ${n} não existe no array!`)
} else {
    console.log(`O valor 8 está na posição ${pos} do array.`)    
}
