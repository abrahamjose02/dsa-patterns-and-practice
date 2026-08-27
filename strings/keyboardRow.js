
function keyboardRow(words){
    let keyboard = ['qwertyuiop','asdfghjkl','zxcvbnm']
    let result = []
    for(let row of keyboard){
        for(let i=0;i<words.length;i++){
             let valid = true
             let word = words[i].toLowerCase()
             for(let char of word){
                if(!row.includes(char)){
                    valid = false
                    break;
                }
             }
               if(valid){
                result.push(words[i])
        }
        }
    }
    return result
}


words = ["Hello","Alaska","Dad","Peace"]

console.log(keyboardRow(words))