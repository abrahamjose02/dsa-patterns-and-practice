function SubsetSumII(arr){
    let result = []
    arr.sort((a,b)=>a-b)
    function solve(index,current){
        result.push([...current])

        for(let i= index;i<arr.length;i++){
            if(i>index && arr[i] === arr[i-1]){
                continue
            }
            current.push(arr[i])
            solve(i+1,current)
            current.pop()
        }
    }
    solve(0,[])
    return result
}

let arr = [1,2,2]

console.log(SubsetSumII(arr))