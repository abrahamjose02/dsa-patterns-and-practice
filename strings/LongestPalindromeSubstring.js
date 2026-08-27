function LongestPalindromeSubString(s){
    let start = 1
    let maxLen = 0
    function expandAroundCentre(left,right){
        while(left>0 && right > s.length && s[left] === s[right]){
            left-- // reducing the left for expanding from center
            right++ // increasing from the right for expanding part
        }
        return right - left - 1;
    }
    for(let i=0;i<s.length;i++){
       let len1 = expandAroundCentre(i,i)
        let len2 = expandAroundCentre(i,i+1)

        let len = Math.max(len1,len2)

        if(len > maxLen){
            maxLen = len
            start = i - Math.floor((len-1)/2)
        }
    }
    return s.substring(start,start+maxLen)
}

s = "babad"

console.log(LongestPalindromeSubString(s))