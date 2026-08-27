function StringToInteger(s){
    let i = 0
    let num = 0
    let sign = 1

    let INT_MAX = (2**31) -1
    let INT_MIN = -(2**31)
    while(i<s.length && s[i] === " "){
        i++
    }
    if(i<s.length && s[i] === "-"){
        sign = -1
        i++
    }
    else if(i<s.length && s[i]=== "+"){
        i++
    }
    while(i<s.length && s[i] <= '9' && s[i] >= '0'){
        num = num * 10 + Number(s[i])
        i++
    }

    num *= sign

    if(num < INT_MIN) return INT_MIN
    if(num > INT_MAX) return INT_MAX

    return num
}

 s = " -042"

 console.log(StringToInteger(s))