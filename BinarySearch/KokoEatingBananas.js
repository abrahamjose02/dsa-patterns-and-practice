function calculateTotalHours(piles,k){
    let totalHours = 0
    
    for(let pile of piles){
        totalHours += Math.ceil((pile/k))
    }
    
    return totalHours
}


function KokoEatingBananas(piles,h){
    let low = 1
    let high = Math.max(...piles)
    let ans = high
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        let requiredHours = calculateTotalHours(piles,mid)
        if(requiredHours <= h){
            ans = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
}


// Goal: Find the minimum eating speed k to finish all piles within h hours.
// Hours calculation: totalHours += Math.ceil(pile / k) for each pile separately.
// If requiredHours <= h: Speed is feasible → save ans = mid and search left (high = mid - 1) for a smaller speed.
// If requiredHours > h: Speed is too slow → search right (low = mid + 1), because smaller speeds require equal or more hours.

