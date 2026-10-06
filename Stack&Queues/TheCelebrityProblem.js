function CelebrityProblem(matrix){
    let n = matrix.length
    let knowMe = new Array(n).fill(0)
    let IKnow = new Array(n).fill(0)

    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1;j++){
            if(matrix[i][j] === 1){
                knowMe[j]++
                IKnow[i]++
            }
        }
    }
    for(let i=0;i<n-1;i++){
        if(knowMe[i] === n-1 && IKnow[i] === 0){
            return i
        }
    }
    return -1
}

//optimized solution

function CelebrityProblem(matrix){
    let n = matrix.length
    let left = 0
    let right = n-1
    while(left < right){
        if(matrix[left][right] === 1){
            left++
        }else{
            right--
        }
    }

    let candidate = left
    for(let i=0;i<n;i++){
         if(matrix[candidate][i] === 1 ||
            matrix[i][candidate] === 0
         ){
            return -1
         }
    }
    return candidate
}

const mat = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 0]
];

console.log(CelebrityProblem(mat))