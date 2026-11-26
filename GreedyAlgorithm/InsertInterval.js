function InsertInterval(intervals, newInterval) {
    let n = intervals.length
    let result = []
    let i = 0

    // Phase 1: Add left intervals
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i])
        i++
    }

    // Phase 2: Merge overlapping intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }

    // Insert the merged interval
    result.push(newInterval)

    // Phase 3: Add remaining intervals
    while (i < n) {
        result.push(intervals[i])
        i++
    }

    return result
}

//Notes : 

// - Existing intervals are already sorted and non-overlapping.
// - Initialize an empty result array and i = 0.
// - Follow the three-phase approach.
// - Phase 1: currentEnd < newStart.
// - Phase 2: currentStart <= newEnd.
// - Merge starting boundaries using Math.min().
// - Merge ending boundaries using Math.max().
// - Push newInterval once after Phase 2.
// - Phase 3: Push all remaining intervals.
// -  Never reset i between phases.
// - Never forget i++.
// - TC: O(N).
// - SC: O(N), including output.
// - Auxiliary SC: O(1), excluding output.