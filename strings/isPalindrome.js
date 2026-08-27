
function is_palindrome(str){
    let n = str.length
    for(let i=0;i<n/2;i++){
        if(str[i]!== str[n-1-i]){
            return false
        }
    }
    return true
}

console.log(is_palindrome("madam"))

// so here the we are running the loop till only n/2 cause the palindrome will be symmeterical.
// So we don't need to run it till n


function is_palindrome2(str){
    const reverse = str.split("").reverse().join("")
    return str === reverse 
}

console.log(is_palindrome2("madam"))


// Two pointer method is 

function is_palindrome3(str){
    let left =0
    let right = str.length-1
    while(left < right){
        if(str[left]!==str[right]){
            return false
        }
        left++
        right--

    }
    return true
}