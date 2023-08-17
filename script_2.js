let num = prompt("donne un nmb stp")
num = parseInt(num)

let total = 1

while(num > 0){
    total *= num
    num--
}

console.log(total)