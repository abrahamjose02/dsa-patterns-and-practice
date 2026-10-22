function SubsetSumI(arr){
    let result = []

    function solve(index,sum){
        if(index >= arr.length){
            result.push(sum)
            return;
        }
        sum += arr[index]
        solve(index+1,sum)
        sum -= arr[index]
        solve(index+1,sum)
    }
    solve(0,0)
    
    return result.sort((a,b)=>a-b)
}

console.log(SubsetSumI([2, 3]));

console.log(SubsetSumI([1, 2, 1]));

console.log(SubsetSumI([]));