let question = prompt("Dis moi")

if(question.slice(-1) === "?"){
    console.log( "Ouais Ouais..." )
}else if(question == question.toUpperCase()){
    console.log("Pwa, calme-toi...")
}else if(question.includes("Fortnite")){
    console.log("on s' fait une partie soum-soum ?")
}else if(question === ""){
    console.log("t'es en PLS ?")
}else{
    console.log("balek.")
}