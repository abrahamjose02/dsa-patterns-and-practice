
//Maximize the Minimum Distance.
// This is an important varient of Binary Search
// Here we want the maximum feasible answer.

//Can we place all k cows while maintaining at least distance units between consecutive cows?
function canPlaceCows(stalls,k,distance){
    let cowsPlaced = 1
    let lastCowPosition = stalls[0]
    for(let i = 1;i<stalls.length;i++){
        if(stalls[i] - lastCowPosition >= distance){
            cowsPlaced++
            lastCowPosition = stalls[i]
        }
    }
    return cowsPlaced >= k
}

function AggressiveCows(stalls,k){
    stalls.sort((a,b)=> a-b)
    let low = 1
    let high = stalls[stalls.length - 1] - stalls[0] //The smallest distance worth testing is 1, and the largest possible distance between two stalls is:
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let IsCowsPlaced = canPlaceCows(stalls,k,mid)
        if(IsCowsPlaced){
            ans = mid
            low = mid + 1 // We want the largest feasible minimum distance.
            // So whenever the IsCowsPlaced returns true , then we should save mid
            // And attempt for a larger distance
        }
        else{
            high = mid - 1
        }
    }
    return ans
}

// 1. Sort the stalls and binary search the minimum distance from 1 to max(stalls) - min(stalls).
// 2. Greedily place the first cow at stalls[0], then place another whenever stalls[i] - lastCowPosition >= mid.
// 3. If cowsPlaced >= k, save mid and search right to maximize the distance; otherwise, search left.
// 4. Return the largest feasible distance stored in ans.