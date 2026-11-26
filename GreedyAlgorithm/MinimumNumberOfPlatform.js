function MinimumNumberOfPlatform(arr,dep){
    arr.sort((a,b)=>a-b)
    dep.sort((a,b)=>a-b)

    let n = arr.length

    let i=0
    let j=0
    let count = 0
    let maxCount = 0
    while (i < n && j < n){
        if(arr[i] <= dep[j]){
        count++
        i++
    }
    else{
        count--
        j++
    }
    maxCount = Math.max(count,maxCount)
    }
    return maxCount
}

//Sweep Line Algorithm

// The Sweep Line Algorithm is an algorithmic technique in which we process events in sorted order along a timeline or coordinate axis while maintaining information about the currently active elements.
// Imagine an invisible line moving from left to right. Whenever it encounters an event, it updates the current state.


// This is a reusable algorithmic pattern where we process events in chronological order and maintain the current state.

// Event	Operation
// Arrival	count++, i++
// Departure	count--, j++
// Track peak occupancy	maxCount = Math.max(count, maxCount)

// This pattern is also useful for problems involving meeting rooms, concurrent requests, maximum simultaneous users and resource allocation.
// One implementation consideration: Your sorting operations mutate both original input arrays. This is acceptable for the problem but worth mentioning in an interview.

//Note

// - Recognize the maximum simultaneous overlap pattern.
// - Sort arrival and departure arrays independently.
// - No need to preserve individual train pairs.
// - Initialize i, j, count, maxCount to zero.
// - Arrival condition: arr[i] <= dep[j].
// - Arrival: count++, i++.
// - Departure: count--, j++.
// - Update maxCount inside the loop.
// - Move only one pointer per iteration.
// - Return maxCount.
// - TC: O(N log N).
// - Auxiliary SC: O(1), excluding sorting.
// - Pattern name: Sweep Line Algorithm.