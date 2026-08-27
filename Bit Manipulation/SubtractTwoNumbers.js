function SubtractTwoNumbers(a,b){
    return add(a,(~b+1))
}

function add(a,b){
    while(b!==0){
        let sum = a ^ b
        let carry = (a & b) << 1
        a = sum
        b = carry
    }
    return a
}

console.log(SubtractTwoNumbers(6,2))
