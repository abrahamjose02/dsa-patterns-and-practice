function reverseWords(str){
    let ans = ""
    let words = str.split(" ") // here the string is seperated into two string with comma seperated by using space seperated " "
    for(let i=words.length-1;i>=0;i--){ // splitted word will be count and will iterate from last
        ans += words[i]
        if(i!==0) ans+=" "
    }
    return ans
}

console.log(reverseWords("Hello world"))


function reverseWord(str){
    return str.trim().split(/\s+/).reverse().join("")
}

// The /s means in regex : Match any whitespace Character
// The whitespace includes " "(space),"\t" (tab), ("\n") New line
// /s+ the + value in here means the occurence of the whitespace character is more than once.