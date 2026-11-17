function CalculatePainters(boards,maxWorkLoad){
    let painters = 1
    let currentWorkLoad = 0
    for(let board of boards){
        currentWorkLoad += board
        if(currentWorkLoad > maxWorkLoad){
            painters++
            currentWorkLoad = board
        }
    }
    return painters
}
function PaintersPartition(boards,k){
    let low = Math.max(...boards)
    let high = boards.reduce((sum,board)=> sum + board,0)
    let ans = -1 
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let requiredPainters = CalculatePainters(boards,mid)
        if(requiredPainters <= k){
            ans = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
}