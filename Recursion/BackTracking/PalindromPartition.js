function isPalindrome(s,left,right){
   while(left<right){
     if(s[left] !== s[right]){
        return false
    }
    left++
    right--
   }
   return true
}
function PalindromePartition(s){
    let result = []
    let path = []
    function solve(start){
        if(start === s.length){
            result.push([...path])
            return;
        }
        for(let end = start;end<s.length;end++){
            if(isPalindrome(s,start,end)){
                path.push(s.slice(start,end+1))
                solve(end+1) // here end+1 , cause it represents the last character includedin the selected substring
                path.pop()
            }
        }
    }
    solve(0)
    return result
}