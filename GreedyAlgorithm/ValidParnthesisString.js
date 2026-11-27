function checkValisString(s){
    let minOpen = 0
    let maxOpen = 0
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            minOpen++
            maxOpen++
        }
        else if(s[i] === ")"){
            minOpen--
            maxOpen--
        }
        else if(s[i] === "*"){
            minOpen--
            maxOpen++
        }
        if(minOpen < 0){
            minOpen = 0
        }
        if(maxOpen < 0){
            return false
        }
    }
    return minOpen === 0
}

//Notes : 

// - * can represent (, ) or an empty string.
// - Never assign a fixed meaning to * during traversal.
// - Maintain two counters: minOpen and maxOpen, representing the minimum and maximum possible unmatched opening parentheses.
// - For ( → increment both counters.
// - For ) → decrement both counters.
// - For * → decrement minOpen and increment maxOpen.
// - If minOpen < 0, reset it to zero to discard invalid possibilities.
// - If maxOpen < 0, immediately return false because no valid interpretation remains.
// - After traversal, return minOpen === 0, since only one balanced interpretation is required.
// - Both negative-counter checks must happen inside the loop.
// - Time: O(N) | Space: O(1).
// Focus during revision: Understand why two counters are necessary, why negative minimum and maximum values are handled differently, and why the final condition checks minOpen instead of maxOpen.

// Pattern: Greedy — Range Tracking.