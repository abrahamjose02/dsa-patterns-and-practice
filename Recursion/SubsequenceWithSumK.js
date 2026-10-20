function SubsequenceWithSumK(index,arr,current,sum,k){
    let n = arr.length
    if(index === n){
        if(sum === k){
            console.log([...current])
        }
        return;
    }
    current.push(arr[index])
    SubsequenceWithSumK(index+1,arr,current,sum+arr[index],k)
    current.pop()
    SubsequenceWithSumK(index+1,arr,current,sum,k)
}

const arr = [1, 2, 1];
SubsequenceWithSumK(0, arr, [], 0, 2);