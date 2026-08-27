str = "programming"


// Brute Force
function removeDuplicateCharacter(str){
    let ans = ""
    for(let char of str){
        if(!ans.includes(char)){
            ans += char
        }
    }
    return ans
}

console.log(removeDuplicateCharacter(str))

// Optmized

function removeDuplicateCharacter1(str){
    const seen = new Set()
    let ans = ""
    for(let char of str){
        if(!seen.has(char)){
            seen.add(char)
            ans += char
        }
    }
    return ans
}

console.log(removeDuplicateCharacter1(str))