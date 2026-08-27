//Longest SubString Without Repeating Characters

//better solution
function LongestSubStringWithoutRepeating(s){
    let maxLength = 0
    for(let i=0;i<s.length;i++){
        let set = new Set()
        for(let j=i;j<s.length;j++){
            if(set.has(s[j])){
                break;
            }
            set.add(s[j])
            maxLength = Math.max(maxLength,j-i+1)
        }
    }
    return maxLength
}

// Time complexity is O(n^2)
// Space complexity is O(1)

s = "abcabcbb"

console.log(LongestSubStringWithoutRepeating(s))


// Optimal solution

function LongestSubStringWithoutRepeating1(s){
    let left = 0
    let maxLength = 0
    let set = new Set()
    for(let right = 0 ; right < s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength
}

console.log(LongestSubStringWithoutRepeating1(s))

// Use WHILE, not IF.
//
// The current character may already exist somewhere inside the window.
// Removing only one character (using if) may not eliminate the duplicate.
// Keep shrinking the window until it becomes valid again
// (i.e., all characters in the window are unique).