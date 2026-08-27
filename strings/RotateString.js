
function RotateString(s,goal){
    // let merged = s+s
    let merged = s.concat(s)
    if(merged.includes(goal)){
        return true
    }
    return false
}

let s = "abcde"
let goal = "cdbae"

console.log(RotateString(s,goal))