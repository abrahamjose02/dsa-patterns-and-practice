var combinationSumI = function(candidates, target) {
    let result = []

    function solve(index,target,current){
    if(target === 0){
    result.push([...current])
    return;
    }
    if(index >= candidates.length || target < 0){
        return;
    }

    current.push(candidates[index])

    solve(index,target-candidates[index],current)

    current.pop()

    solve(index+1,target,current)
    }
    solve(0,target,[])
    return result
};

let arr = [2, 3, 5]
let target = 8

combinationSumI(arr,target)