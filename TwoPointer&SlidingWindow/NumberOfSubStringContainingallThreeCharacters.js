
// Brute force
function NumberOfSubStringContainingallThreeCharacters(s){
    let count = 0
    let n = s.length
    for(let start = 0;start < n ; start++){
        let freq = {
            a:0,
            b:0,
            c:0
        }
        for(let end =start;end<n;end++){
            freq[s[end]]++
            if(freq.a>0 && freq.b>0 && freq.c>0){
                count += n - end
                break;
            }
        }
    }
    return count
}

// better solution 

function NumberOfSubStringContainingallThreeCharacters1(s){
    let count = 0
    let n = s.length
    let left = 0
    const freq = {
            a:0,
            b:0,
            c:0
        }
    for(let right = 0;right<n;right++){
        freq[s[right]]++
        while(freq.a>0 && freq.b>0 && freq.c>0){
            count += n - right
            freq[s[left]]--
            left++
        }
    }
    return count

}

//optimal solutions

function NumberOfSubStringContainingallThreeCharacters2(s){
    let count = 0
    let lastSeen = {
        a:-1,
        b:-1,
        c:-1
    }
    for(let right = 0;right < s.length; right++){
        lastSeen[s[right]] = right
        const earliestLastSeen = Math.min(lastSeen.a,lastSeen.b,lastSeen.c)
        // All substrings ending at right and starting from 
        // index 0 through earliestlastSeen  are valid
        count += earliestLastSeen + 1
    }
    return count
}

console.log(NumberOfSubStringContainingallThreeCharacters2())