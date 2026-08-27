function LongestSubstringWithAtmostKDistinct(s,k){
    let n = s.length
    let left = 0 
    let maxLength = 0
    let freq = new Map()
    for(let right = 0 ; right < n;right++){
        let rightValue = s[right]
        freq.set(rightValue,(freq.get(rightValue)||0)+1)
        if(freq.size > k){
            let leftValue = s[left]
            freq.set(leftValue,freq.get(leftValue)-1)
            if(freq.get(leftValue) === 0){
                freq.delete(leftValue)
            }
            left++
        }
        if(freq.size <= k){
            maxLength = Math.max(maxLength,right-left+1)
        }
    }
    return maxLength
}

let s = ["a","a","a","b","b","c","c","d"]
let k = 2

console.log(LongestSubstringWithAtmostKDistinct(s,k))