function JobSequencing(jobs){
    jobs.sort((a,b) => b.profit - a.profit)
    let maxDeadline = 0
    let count = 0
    let totalProfit = 0
    for(let i=0;i<jobs.length;i++){
        maxDeadline = Math.max(maxDeadline,jobs[i].deadline)
    }
    let slots = new Array(maxDeadline+1).fill(-1)
    for(let i=0;i<jobs.length;i++){
        let deadline = jobs[i].deadline
        for(let j = deadline;j>=1;j--){
           if(slots[j] === -1){
            slots[j] = jobs[i].id
            count++
            totalProfit += jobs[i].profit
            break;
           }
        }
    }
    return [count,totalProfit]
}


let jobs = [
    { id: 1, deadline: 4, profit: 20 },
    { id: 2, deadline: 1, profit: 10 },
    { id: 3, deadline: 1, profit: 40 },
    { id: 4, deadline: 1, profit: 30 }
]

console.log(JobSequencing(jobs))

// - Every job takes exactly one unit of time.
// - Deadline represents the latest allowed completion time, not the execution duration.
// - Sort jobs in descending order of profit.
// - Find the maximum deadline D.
// - Create a slots array of size D + 1, initialized with -1.
// - Index 0 remains unused.
// - For each job, traverse backwards from its deadline to slot 1.
// - Choose the latest available slot to preserve earlier slots for jobs with tighter deadlines.
// - If a slot is available:
//   - Assign the job ID.
//   - Increment count.
//   - Accumulate profit using totalProfit += jobs[i].profit.
//   - Break the inner loop.
// - If no eligible slot is available, skip the job.
// - Return [count, totalProfit].
// Time: O(N log N + N × D)
// Space: O(D), excluding sorting overhead.

// Future optimization: Disjoint Set Union (DSU).