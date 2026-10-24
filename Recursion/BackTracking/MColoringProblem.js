// const adj = [
//     [1],
//     [0,2],
//     [1]
// ]

// const vertex = 1

// for(let neighbor of adj[vertex]){
//     console.log(neighbor)
// }


function isSafe(vertex,color,adj,colors){
        // Check all neighbors of the current vertex.
    // If any neighbor already has the same color, this assignment is invalid.
    for(const neighbor of adj[vertex]){
        if(colors[neighbor] === color){
            return false
        }
    }
    return true
}

function MColoring(V,M,edges){

    //Building the adjacency List
    // Since the graph is undirected, add both directions.
    const adj = Array.from({length:V},()=>[])

    for(const [u,v] of edges){
         // A self-loop means the same vertex is connected to itself.
        // Such a graph cannot be colored correctly with any valid coloring.
        if(u === v){
            return false
        }
        adj[u].push(v)
        adj[v].push(u)
    }

    const colors = new Array(V).fill(0)
    
    function solve(vertex){
    if(vertex === V){
        return true
    }

    for(let color = 1;color<=M;color++){
        if(isSafe(vertex,color,adj,colors)){
            colors[vertex] = color
            
            //Recurse to color the next vertex
            if(solve(vertex+1)){
                return true
            }
            // Backtracking: undo the assignment
             colors[vertex] = 0
        }
    }
    // No color works for this vertex
    return false
}
return solve(0)
}