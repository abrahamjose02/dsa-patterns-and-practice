// Permuations without duplicates in it.

function PermuationII(nums){
    let result = []
    nums.sort((a,b)=>a-b)
    let used = new Array(arr.length).fill(false)
    function solve(current){
        if(current.length === nums.length){
            result.push([...current])
            return;
        }
        for(i=0;i<nums.length;i++){
            if(i>0 && nums[i] === nums[i-1] && !used[i-1]){
                continue
            }
            if(used[i]) continue
            used[i] = true
            current.push(nums[i])
            solve(current)
            current.pop()
            used[i] = false
        }
    }
    solve(current)
    return result
}