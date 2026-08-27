function PowerOfTwo(num){
    if(num<=0) return false
    while(num>1){
        if(num %2 !==0){
            return false
        }
        num=num/2
    }
    return true
}

console.log(PowerOfTwo(5))


function PowerOfTwo1(n){
    return n>0 && (n(n-1) & 1) === 0
}