function characterCount(str){
    let map = {}
    for (let char of str){
        map[char] = (map[char] || 0) + 1
    }
    return map
}

example = "aabcc"

console.log(characterCount(example))