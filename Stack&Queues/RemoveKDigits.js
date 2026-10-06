function RemoveKDigits(num,k){
    const n = num.length
    let stack = []
    let result
    for(let i=0;i<n;i++){
        while(stack.length > 0 && stack[stack.length-1] > num[i] && k>0){
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    //If still there are elements to be removed then we have to remove it from the end
    while(k>0 && stack.length >0){
        stack.pop()
        k--
    }
    result = stack.join("").replace(/^0+/,"")
    return result === "" ? "0" : result
}

let num = "1432219"
let k = 3
console.log(RemoveKDigits(num,k))