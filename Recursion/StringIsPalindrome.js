function Palindrome(str,i){
    let n = str.length
    if(i>=Math.floor(n/2))return true;
    if(str[i] != str[n-i-1]) return false
    return Palindrome(str,i+1)
}

let str = "ABRBA"
console.log(Palindrome(str,0))
