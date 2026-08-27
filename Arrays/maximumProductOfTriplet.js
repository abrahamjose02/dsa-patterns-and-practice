
// Better method  nlogn time complexity

function MaximumProductOfTriplet(arr){
    let n=arr.length
    let maxProduct=1
    arr.sort((a,b)=>a-b)
    return maxProduct = Math.max(arr[0]*arr[1]*arr[n-1],arr[n-1]*arr[n-2]*arr[n-3])
}

//Best optmized method is the Greedy method o(n) method

let n = arr.length
let maxA = Number.MIN_SAFE_INTEGER
let maxB = Number.MIN_SAFE_INTEGER
let maxC = Number.MIN_SAFE_INTEGER
let minA = Number.MAX_SAFE_INTEGER
let minB = Number.MAX_SAFE_INTEGER

for(let i=0;i<n;i++){
    if(arr[i]>maxA){
        maxC=maxB
        maxB=maxA
        maxA = arr[i]
    }
    else if(arr[i]>maxB){
        maxC=maxB
        maxB=arr[i]
    }
    else if(arr[i]>maxC){
        maxC=arr[i]
    }
    if(arr[i]<minA){
        minB=minA
        minA = arr[i]
    }
    else if(arr[i]<minB){
        minB = arr[i]
    }
}
return Math.max(maxA*maxB*maxC,minA*minB*maxA)