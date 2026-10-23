function permutationI(nums){
    const result = []
    const used = new Array(nums.length).fill(false)

    function solve(current){
        if(current.length === nums.length){
            result.push([...current])
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(used[i]) continue;
            used[i] = true
            current.push(nums[i])
            solve(current)
            current.pop()
            used[i] = false
        }
    }
    solve([])
    return result
}

let nums = [1, 2, 3];
console.log(permutationI(nums))


// Approach 2 , Which is the inplace swapping

function permuationSwaps(nums){
    let result = []
    function solve(index){
        if(index === nums.length){
            result.push([...nums])
            return;
        }
        for(let i=index;i<nums.length;i++){
            [nums[i], nums[index]] = [nums[index], nums[i]]; //swap
            solve(index+1) //recursion
            [nums[i], nums[index]] = [nums[index], nums[i]]; //swap back
        }
    }
    solve(0)
    return result
}
console.log(permuationSwaps(nums))