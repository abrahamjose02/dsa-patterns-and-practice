
str = "leetcode"
str2 = "aabbccc"

function firstNonRepeatingCharacter(str){
    let map = {}
    for(let char of str){
        map[char] = (map[char] || 0)+1
    }

    for(let char of str){
       if(map[char] === 1) return char
    }
       return -1
}

console.log(firstNonRepeatingCharacter(str2))