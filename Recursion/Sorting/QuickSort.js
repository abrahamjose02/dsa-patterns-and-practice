function partition(arr,low,high){
    let i = low - 1
    let pivot = arr[high]
    for(let j = low;j<high;j++){
        if(arr[j]<= pivot){
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
    return i+1
}

function QuickSort(arr,low=0,high=arr.length-1){
    if(low >= high){
        return arr
    }

    let pivotIndex = partition(arr,low,high)

    let leftPartition = QuickSort(arr,low,pivotIndex-1)
    let rightPartition = QuickSort(arr,pivotIndex+1,high)


    return arr
}

let arr = [5, 2, 8, 1, 3]

console.log(QuickSort(arr))