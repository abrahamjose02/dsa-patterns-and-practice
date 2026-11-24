function MergeIntervals(intervals){
    if(intervals.length === 0) return []
    intervals.sort((a,b)=>a[0]-b[0])
    let result = [intervals[0]]
    for(let i=1;i<intervals.length;i++){
        let current = intervals[i]
        let previous = result[result.length-1]
        if(current[0] <= previous[1]){
            previous[1] = Math.max(previous[1], current[1])
        }
        else{
            result.push(current)
        }
    }
    return result
}