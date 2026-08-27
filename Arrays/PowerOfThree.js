function PowerOfThree(n){
    if(n<=0) return false
    while(n > 1){
        if(n % 3 !== 0){
            return false
        }
        n = n / 3
    }
    return true
}

console.log(PowerOfThree(6)); 
console.log(PowerOfThree(9));
console.log(PowerOfThree(27)); 
console.log(PowerOfThree(1));