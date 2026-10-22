var combinationSum2 = function(candidates, target) {
    let result = []
    candidates.sort((a,b)=>a-b)
    
    function solve(index,target,current){
        if(target === 0){
            result.push([...current])
            return;
        }

        for(let i=index;i<candidates.length;i++){
            if(i>index && candidates[i] === candidates[i-1]){
                continue;
            }
            if(candidates[i] > target){
                return;
            }

            current.push(candidates[i])

            solve(i+1,target-candidates[i],current)

            current.pop()
        }
    }
    solve(0,target,[])
    return result
};