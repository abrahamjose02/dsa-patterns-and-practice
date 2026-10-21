function RecursiveInsertionSort(arr,i=1){
    if(i>=arr.length){
        return arr
    }
    let key = arr[i]
    let j = i-1
    while(j>=0 && arr[j] > key){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = key

   return  RecursiveInsertionSort(arr,i+1)
}

let arr = [5, 3, 8, 1, 2]

console.log(RecursiveInsertionSort(arr))
