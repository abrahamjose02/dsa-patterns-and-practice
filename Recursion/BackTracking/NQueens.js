function isSafe(row, col, board) {
    const n = board.length;

    // If any of the condition returns false , isSafe will return false and it doesn't check for other condition
    let r = row - 1
    while(r>=0){
        if(board[r][col] === "Q"){
            return false
        }
        r--
    }
    r = row -1
    let c = col-1
    while(r>=0 && c>=0){
        if(board[r][c] === "Q"){
            return false
        }
        r--
        c--
    }
    r=row-1
    c=col+1
    while(r>=0 && c<n){
        if(board[r][c] === "Q"){
            return false
        }
        r--
        c++
    }
    return true
}


function solveNQueens(n) {
    let result = []

    const board = Array.from({length:n},()=> new Array(n).fill("."))

    function solve(row){
        if(row === n){
            result.push(board.map((r)=>r.join("")))
            return;
        }
        for(let col = 0;col<n;col++){
            if(isSafe(row,col,board)){
            board[row][col] = "Q"
            solve(row+1)
            board[row][col] = "."
            }
        }
    }
    solve(0)
    return result
}