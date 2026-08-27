// a & b will have only those bits set which are set in both a and b.
// a ^ b will have only those bits set which are set in either a or b but not in both.  

// eg : 3 + 5

// 3 = 011
// 5 = 101


function addTwoNumbers(a,b){
    while(b!==0){
        let sum = a^b
        let carry = (a & b) << 1 // move the 1 bit one place to the left. Eg 0010 -> 0100
        a = sum
        b = carry
    }
    return a
}