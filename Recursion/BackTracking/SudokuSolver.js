function isValid(row,col,digit,board){
    for(let i=0;i<board.length;i++){
        
        if(board[row][i] === digit){
            return false
        }
        if(board[i][col] === digit){
            return false
        }
    }
        let startRow = Math.floor(row/3)*3
        let startCol = Math.floor(col/3)*3


        for(let r=0;r<3;r++){
            for(let c=0;c<3;c++){
                if(board[startRow+r][startCol+c] === digit){
                    return false
                }
            }
        }
        return true

    }

function SudokuSolver(board){
    function solve(){
        for(let row = 0;row<board.length;row++){
            for(let col=0;col<board.length;col++){
                if(board[row][col] === "."){
                    for(let digit=1;digit<=9;digit++){
                        const value = String(digit)
                        if(isValid(row,col,value,board)){
                            board[row][col] = value
                            if(solve()){
                                // A valid solution was found
                                // Propagate success through recursive calls
                                return true
                            }
                            // BACKTRACK: Undo the choice if it leads
                            // to an invalid solution
                            board[row][col] = "."
                        }
                    }
                    // None of the digits (1-9) worked for this empty cell
                    // Return false to backtrack to the previous decision
                    return false 
                }
            }
        }
        return true //base case : When no empty cells remain
    }
    solve()
    return board
}