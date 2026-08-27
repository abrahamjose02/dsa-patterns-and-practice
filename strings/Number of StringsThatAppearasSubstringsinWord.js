//Number of Strings That Appear as Substrings in Word

function CountStringsthatappearasSubstringsinWords(pattern,word){
    let count = 0
    for(let pattern of patterns){
        if(word.includes(pattern)){
            count++
        }
    }
    return count
}
patterns = ["a","abc","bc","d"], word = "abc"
console.log(CountStringsthatappearasSubstringsinWords(patterns,word))