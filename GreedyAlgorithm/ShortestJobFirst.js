//Shortest Job First , CPU Scheduling.

function solve(bt){
    bt.sort((a,b)=>a-b)
    let elapsedTime = 0;
    let totalWaitingTime = 0;
    for(let i=0;i<bt.length;i++){
        totalWaitingTime += elapsedTime
        elapsedTime += bt[i]
    }
    return Math.floor(totalWaitingTime/bt.length)
}

let bt = [4, 3, 7, 1, 2];


// Since all processes arrive at time zero, the waiting time of the current process is equal to the cumulative burst time of all previously executed processes.
// Therefore, I first add the elapsed time to the total waiting time. 
// Then, I add the current process's burst time to the elapsed time so that it contributes to the waiting time of subsequent processes

// Pattern: Greedy + Running Sum.

// Greedy intuition: Execute the shortest process first to minimize the waiting time of subsequent processes. 
// Longer processes executed earlier unnecessarily increase the waiting time of shorter processes.

// Approach:
// 1. Sort the burst times in ascending order.
// 2. Initialize elapsedTime and totalWaitingTime to zero.
// 3. Add the elapsed time to the total waiting time.
// 4. Add the current burst time to the elapsed time.
// 5. Return the floored average waiting time.