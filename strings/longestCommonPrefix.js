strings = ["flower", "flow", "flight"]

function longestCommonPrefix(strings){
 if(strings.length === 0) return ""
 let result = ""
 for( let i=0;i<strings[0].length;i++){
    let prefix = strings[0].slice(0,i+1)
    for(let j=1;j<strings.length;j++){  
        if(!strings[j].startWith(prefix)){
            return result
        }
    }
    result = prefix
 }
 return result
}

// first letter is taken and then it's first character is taken and 
// compared with all the other letters whether to see they start with this prefix
// if they don't then return the result .
// if they down in the result please keep the validated prefix and then move on to the next 
// letter in the first string for comparison


// Better Method

function longestCommonPrefix1(strings){
    if(strings.length === 0) return ""
    let prefix = strings[0]
    for(let i=0;i<strings.length;i++){
        while(!strings[i].startWith(prefix)){
            prefix = prefix.slice(0,prefix.length-1)
            if(prefix === "") return ""
        }
    }
    return prefix
}

// Here the first initial string is being set as prefix and then we enter the for loop with the 
// the second string is being checked with the prefix , it shouldn't be starting with the prefix 
//word , so then the prefix word is sliced from the last word and then again checked whether the 
// word starts with the prefix and if not still slices and continues
// when the word matches the prefix (after slicing) then the loop condition breaks and then
// it comes out and the goes to the second word and then does the same thing
// once all the words are completed then prefix is returned
// o(m*n)

//Optimal solution 

function longestCommonPrefix2(strings){
    if(strings.length === 0) return ""
    for(let i=0;i<strings[0].length;i++){
        char = strings[0][i]
        for(j=1;j<strings.length;j++){
            if(i>= strings[j].length || strings[j][i] !== char){
                return strings[0].slice(0,i)
            }
        }
    }
    return strings[0] // return the first string if all the positions match which is same value
}


// Use the first string as a reference.
// Compare each character position with all other strings.
// If a string ends or a mismatch occurs, return the prefix before that position.
// If all positions match, return the first string.