

// brute force method
function validAnagram(s,t){
    if(s.length !== t.length) return false
    return s.split("").sort().join("") === t.split("").sort().join("")
}

s = "listen"
t = "istenb"

// frequency map

function isAnagram(s,t){

    if(s.length !== t.length) return false
    
    let map = {}
    for(let char of s){
        map[char] = (map[char] || 0) + 1
    }
    for(let char of t){
        if(!map[char]){
            return false
        }
        map[char]--
    }
    return true
}

function isAnagram1(s,t){
    if(s.length !== t.length) return false
    let map = new Map()
    for(let char of s){
        map.set(char,(map.get(char)||0)+1)
    }

    for(let char of t){
        if(!map.has(char) || map.get(char) === 0){
            return false
        }
        map.set(char,map.get(char)-1)
    }
    return true
}

// Most optimal approach is : 

function isAnagram2(s,t){
    if(s.length !== t.length) return false
    let count = new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
       console.log(count[s.charCodeAt(i)-97]++)

       console.log(count[t.charCodeAt(i)-97]--)
    }
    console.log(count)
    for(let num of count){
        if(num !== 0){
            return false
        }
    }
    return true
}

// Count characters from s (+1)
// Remove characters from t (-1)
// If all counts becomes :0
// then: Anagram

// Example : The characterCode of 'a' will be 97
// The characterCode of 'A' will be 65

console.log(isAnagram2(s,t))