function CountTheSubsequenceWithSumK(index,arr,current,sum,k){
    if(index === arr.length){
        if(sum === k){
            return 1
        }
        return 0
    }

    current.push(arr[index])

    let left = CountTheSubsequenceWithSumK(index+1,arr,current,sum+arr[index],k)

    current.pop()

    let right = CountTheSubsequenceWithSumK(index+1,arr,current,sum,k)

    return left + right
}

const arr = [1, 2, 1];
console.log(CountTheSubsequenceWithSumK(0, arr, [], 0, 2));