function multiplyTwoNumbers(nums){
    let result = 0
    while(b >0){
        if(b & 1){
            result = add(result,a)
        }
        a = a << 1
        b = b >> 1
    }
    return result
}

function add(a,b){
    while(b !==0){
    let sum = a ^ b
    let carry = (a & b) << 1
    a = sum
    b = carry
    }
    return a
}

