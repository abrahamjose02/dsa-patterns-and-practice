function canMakeBouquets(bloomDays,day,m,k){
    let consecutive = 0
    let bouquets = 0
    for(let bloom of bloomDays){
        if(bloom <= day){
            consecutive++
        }
        else{
            consecutive = 0
        }
        if(consecutive === k){
            bouquets++
            consecutive = 0
        }
    }
    return bouquets >=m
}
function MinimumDaysToMakeMBouquets(bloomDays,m,k){
    if(m * k > bloomDays.length){
        return -1
    }
    let low = Math.min(...bloomDays)
    let high = Math.max(...bloomDays)
    let ans = -1
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        let isPossible = canMakeBouquets(bloomDays,mid,m,k)
        if(isPossible){
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
}

//Notes : 
// 1. Goal: Find the minimum day to make m bouquets, each requiring k adjacent bloomed flowers; return -1 if m * k > n.
// 2. Feasibility: For a given mid day, count consecutive flowers with bloomDay[i] <= mid; form a bouquet whenever the count reaches k, then reset.
// 3. If isPossible === true: Save ans = mid and search left (high = mid - 1) to find an earlier feasible day.
// 4. If isPossible === false: Search right (low = mid + 1), because earlier days cannot have more bloomed flowers.

//bouquet >= m means we have enough flowers to satisfy the requirement.