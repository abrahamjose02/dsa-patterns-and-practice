function Subsequence(index,arr,current){
    let n = arr.length
    if(index >= n){
        console.log(current)
        return;
    }
    current.push(arr[index])
    Subsequence(index+1,arr,current)
    current.pop()
    Subsequence(index+1,arr,current)
}

let arr = [1,2,3]
Subsequence(0,arr,[])