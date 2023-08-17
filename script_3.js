let stairs = prompt("cmb d'étages?")
stairs = parseInt(stairs)

let iteration = 1
while(iteration <= stairs ){
    console.log(' '.repeat(stairs - iteration) + '#'.repeat(iteration))
    iteration++
}