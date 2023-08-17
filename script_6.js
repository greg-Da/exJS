let arn1 = "CCGUCGUUGCGCUACAGC"
let arn2 = "CCUCGCCGGUACUUCUCG"

function life(arn){
    let splitString = []
    for(let count = 0; count < arn.length; count += 3){
        splitString.push(arn.substring(count, count + 3))
    }
    
    for(let count = 0; splitString.length > count; count++){
        
        switch(splitString[count]){
            case "UCU" :
            case "UCC" :
            case "UCA" :
            case "UCG" :
            case "AGU" :
            case "AGC" :
            splitString[count] = "Sérine"
            break
            
            case "CCU" :
            case "CCC" :
            case "CCA" :
            case "CCG" :
            splitString[count] = "Proline"
            break
            
            case "UUA" :
            case "UUG" :
            splitString[count] = "Leucine"
            break
            
            case "UUU" :
            case "UUC" :
            splitString[count] = "Phénylalanine"
            break
            
            case "CGU" :
            case "CGC" :
            case "CGA" :
            case "CGG" :
            case "AGA" :
            case "AGG" :
            splitString[count] = "Arginine"
            break
            
            case "UAU" :
            case "UAC" :
            splitString[count] = "Tyrosine"
            break
        }
    }
    
    console.log(splitString)
}

life(arn1)
life(arn2)