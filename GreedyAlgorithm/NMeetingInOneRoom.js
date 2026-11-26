//N Meetings in One Room
function maxMeetings(start,end){
    let meetings =  start.map((value,index)=> ({
        start:value,
        end:end[index]
        })
    )
    meetings.sort((a,b) => a.end - b.end)
    let count = 0
    let lastEnd = -Infinity
    for(let i=0;i<meetings.length;i++){
        if(meetings[i].start > lastEnd){
            count++
            lastEnd = meetings[i].end
        }
    }
    return count
}

let start = [1, 3, 0, 5, 8, 5]
let end   = [2, 4, 6, 7, 9, 9]


//Notes : 

// - Objective: Maximize the number of non-overlapping meetings.
// - Combine start and end arrays using start.map().
// - Sort by ascending ending time, not starting time or duration.
// - Initialize count = 0 and lastEnd = -Infinity.
// - Select a meeting only when currentStart > lastEnd.
// - Increment count only when a meeting is selected.
// - Update lastEnd only after successful selection.
// - Never update lastEnd for skipped meetings.
// - Return count.
// - Greedy correctness can be explained using the exchange argument.
// Time complexity: O(N log N)
// Space complexity: O(N)

// Key intuition: Finish early to maximize future opportunities.