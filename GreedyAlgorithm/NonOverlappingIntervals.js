function eraseOverlapIntervals(intervals){
    intervals.sort((a,b) => a[1] - b[1])
    let count = 0
    let lastEnd = -Infinity
    for(let i=0;i<intervals.length;i++){
        if(intervals[i][0] >= lastEnd){
            count++
            lastEnd = intervals[i][1]
        }
    }
    return intervals.length - count
}

//Notes : 

// - Minimize removals by maximizing retained intervals.
// - Sort by earliest ending time.
// - intervals[i][0] represents starting time.
// - intervals[i][1] represents ending time.
// - Initialize lastEnd = -Infinity to support negative values.
// - Select only when currentStart >= lastEnd.
// - Update lastEnd only when an interval is retained.
// - count represents retained intervals, not removed intervals.
// - Return N - count.
// - TC: O(N log N).
// - SC: O(1), excluding sorting overhead.
// Key intuition: The earlier an interval finishes, the more opportunities remain for selecting subsequent intervals.