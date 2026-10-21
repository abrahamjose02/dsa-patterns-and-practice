function RecursiveBubbleSort(arr,n){
    if(n<=1){
        return arr
    }

    for(let i=0;i<n-1;i++){
        if(arr[i] > arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }
    return RecursiveBubbleSort(arr,n-1)
}
let arr = [5, 3, 8, 1, 2]
console.log(RecursiveBubbleSort(arr,arr.length));

//Time complexity	O(n²)