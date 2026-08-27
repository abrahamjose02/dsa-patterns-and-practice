
// Brute Force Methods

function rotateArray(arr,d){
    let n= arr.length
        for( let i=0;i<d;i++){
            let first = arr[0]
            for(let j=0;j<n-1;j++){
                arr[j]=arr[j+1]
            }
            arr[n-1]=first
        }
        return arr
}

// Optimized methods with temporary Arrays

function rotateArray(arr,d){
    let n=arr.length
    if(d>n) d%=n
    let tempArr = new Array(n)
    for(let i=0;i<n-d;i++){
        tempArr[i]=arr[i+d]
    }
    for(let i=0;i<d;i++){
        tempArr[n-d+i] = arr[i]
    }
    for(let i=0;i<n;i++){
        arr[i]=tempArr[i]
    }
    return arr
}