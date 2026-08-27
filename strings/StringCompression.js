str = "aaabbc"  // answer should be in the form of a3b2c1

//brute force
function stringCompression(str){
    if(str.length === 0) return ""
    let result = ""
    for(let i=0;i<str.length;i++){
        let count = 1
        while(i+1<str.length && str[i] === str[i+1]){
            count++
            i++
        }
        result += str[i] + count
    }
    return result
}

// Time complexity is O(n^2)
// Space complexity is O(n)

console.log(stringCompression(str))

// Better solution

function stringCompression1(str){
    if(str.length === 0) return ""
    let result = []
    let count = 1
    for(let i=1;i<=str.length;i++){
        if(str[i]=== str[i-1]){
            count++
        }
        else{
            result += (str[i-1] + count)
            count =1
        }
    }
    return result
}
//O(n) - Time Complexity
// O(n) - Space Complexity

console.log(stringCompression1(str))

// Optimal solution