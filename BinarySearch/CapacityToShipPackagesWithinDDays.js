function calculateDays(weights,minWeight){
    let totalDays = 1
    let currentWeight = 0
    for(let weight of weights){
        currentWeight += weight
        if(currentWeight > minWeight){
            totalDays++
            currentWeight = weight
        }
    }
    return totalDays
}
function ShipWithinDays(weights,days){
    let low = Math.max(...weights) // The maximum value that should be shipped in a day
    //the ship must be capable of carrying the heaviest individual package.
    let high = weights.reduce((sum,weight) => sum + weight,0)
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let totalDays = calculateDays(weights,mid)
        if(totalDays <= days){
            ans = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
}

// 1. Goal: Find the minimum ship capacity required to deliver all packages in order within days days.
// 2. Feasibility: Accumulate package weights; when the total exceeds capacity, start a new day and carry the current package forward.
// 3. Search space: low = max(weights), high = sum(weights) because a package cannot be split, and all packages could fit in one day.
// 4. Binary search: If totalDays <= days, save mid and search left; otherwise, search right because greater capacity is needed.