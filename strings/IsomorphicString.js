s="paper"
t="title"

function IsomorphicStrings(s,t){
    if(s.length !== t.length) return false
    let mapST = new Map()
    let mapTS = new Map()
    for(let i=0;i<s.length;i++){
        let ch1 = s[i]
        let ch2 = t[i]
        if(mapST.has(ch1) && mapST.get(ch1) !== ch2){
            return false
        }
        if(mapTS.has(ch2) && mapTS.get(ch2)!== ch1){
            return false
        }
        mapST.set(ch1,ch2)
        mapST.set(ch2,ch1)
    }
    return true
}

// Why two maps?

// Because one character from s should map to only one character in t, 
// and one character from t should not be used by multiple characters from s.

console.log(IsomorphicStrings(s,t))