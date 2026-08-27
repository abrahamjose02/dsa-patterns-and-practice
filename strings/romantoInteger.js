function romanToInteger(s){
    let result = 0
    let romantoInt = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let splits = s.split("")
    for(let i=0;i<splits.length;i++){
        let current = romantoInt[splits[i]]
        let next = romantoInt[splits[i+1]]

        if(current < next){
            result -= current
        }
        else{
            result += current
        }
    }
    return result
}

console.log(romanToInteger("XVI"))