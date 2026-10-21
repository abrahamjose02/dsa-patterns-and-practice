function RecursiveBubbleSort(arr,n=arr.length){
    if(n<=1){
        return arr
    }

    for(let i=0;i<n-1;i++){
        if(arr[i] > arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }
    RecursiveBubbleSort(arr,n-1)
}

console.log(recursiveBubbleSort([5, 3, 8, 1, 2]));