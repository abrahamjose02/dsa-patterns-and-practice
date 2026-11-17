function countRequiredStations(stations, maxAllowedGap) {
    let requiredStations = 0;

    for (let i = 1; i < stations.length; i++) {
        let gap = stations[i] - stations[i-1]
        let stationsRequired = Math.ceil((gap/maxAllowedGap)) - 1
        requiredStations += stationsRequired
    }

    return requiredStations;
}

function minimizedMaximumDistanceBetweenGasStation(stations,k){
    let low = 0
    let high = 0

    for(let i=1;i<stations.length;i++){
        high = Math.max(high,stations[i] - stations[i-1])
    }
    while(high - low > 1e-6){ // with decimal binary search it is high - low > 1e-6 because we are moving high = mid and low = mid
        let mid = (low + high)/2   // Here we are not using Math.floor because the answer can be decimal
        
        let requiredStations = countRequiredStations(stations,mid)
        if(requiredStations <= k){
            high = mid
        }
        else{
            low = mid
        }
    }
    return high
}

// 1. Search space: low = 0, high = maximum consecutive gap.
// 2. Feasibility: For each gap, calculate Math.ceil(gap / mid) - 1 and sum the required stations.
// 3. Binary search: If requiredStations <= k, move high = mid; otherwise, move low = mid.
// 4. Decimal precision: Use (low + high) / 2, stop when high - low <= 1e-6, and return high.


// 1e-6 = 1 * 10^{-6} = 0.000001



// Time complexity : O(nlog(D/ε))

// D = maximum distance between consecutive existing stations.
// ε (epsilon) = desired precision, which is 1e-6.