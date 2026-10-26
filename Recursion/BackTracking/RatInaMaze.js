// Rat in a Maze problem:
// Find all possible paths from the top-left corner to the bottom-right corner
// of a maze, where 1 represents an open cell and 0 represents a blocked cell.
// We use Depth-First Search (DFS) with backtracking to explore valid moves.

function isSafe(row, col, maze, visited, N) {
    // A cell is valid only if it is inside the maze boundaries,
    // it is not blocked, and it has not been visited before.
    if (row < 0 || row >= N || col < 0 || col >= N) {
        return false;
    }
    if (maze[row][col] === 0) {
        return false;
    }
    if (visited[row][col]) {
        return false;
    }
    return true;
}

function RatInaMaze(maze) {
    const result = [];
    const N = maze.length;

    // If the maze is empty or the start/end cells are blocked,
    // there is no valid path.
    if (N === 0 || maze[0][0] === 0 || maze[N - 1][N - 1] === 0) {
        return [];
    }

    // visited matrix keeps track of cells already explored in the current recursion path.
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));

    // DFS function to explore all possible directions from the current cell.
    function solve(row, col, path) {
        // If we reach the destination, store the path found.
        if (row === N - 1 && col === N - 1) {
            result.push(path);
            return;
        }

        // Mark the current cell as visited before exploring its neighbors.
        visited[row][col] = true;

        // Try moving down, left, right, and up in that order.
        if (isSafe(row + 1, col, maze, visited, N)) {
            solve(row + 1, col, path + "D");
        }
        if (isSafe(row, col - 1, maze, visited, N)) {
            solve(row, col - 1, path + "L");
        }
        if (isSafe(row, col + 1, maze, visited, N)) {
            solve(row, col + 1, path + "R");
        }
        if (isSafe(row - 1, col, maze, visited, N)) {
            solve(row - 1, col, path + "U");
        }

        // Backtracking step: unmark the cell so other paths can use it.
        visited[row][col] = false;
    }

    solve(0, 0, "");
    return result;
}