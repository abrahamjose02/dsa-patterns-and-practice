
//optimal solution

function LonggestRepeatingCharacterReplacement(s,k){
    let n = s.length
   let left = 0
   let maxFreq = 0
   let maxLength = 0
   let freq = new Array(26).fill(0)
   for(let right = 0;right<n;right++){
    let rightCharIndex = s.charCodeAt(right) - 65
    freq[rightCharIndex]++
    maxFreq = Math.max(maxFreq,freq[rightCharIndex])
    const windowLength = right - left + 1
    const replacementNeeded = windowLength - maxFreq
    if(replacementNeeded > k){
        let leftCharIndex = s.charCodeAt(left) - 65
        freq[leftCharIndex]--
        left++
    }
    maxLength = Math.max(maxLength,right-left+1)
   }
   return maxLength
}