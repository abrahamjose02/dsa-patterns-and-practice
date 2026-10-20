function Subsequence(index,arr,current){
    let n = arr.length
    if(index >= n){
        console.log(current)
        return;
    }
    current.push(arr[index]) // pick up
    Subsequence(index+1,arr,current)
    current.pop() // backtrack
    Subsequence(index+1,arr,current) // not pick
}

let arr = [1,2,3]
Subsequence(0,arr,[])


// The time complexity would be 0(2^n * n)

// The Space complexity is : O(n)