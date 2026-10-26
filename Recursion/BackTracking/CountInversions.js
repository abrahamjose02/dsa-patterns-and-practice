function merge(low,mid,high,arr){
    let left = low
    let right = mid +1
    let count = 0
    let temp = [] //We must construct a sorted array while counting inversions, because the next recursive merge depends on receiving sorted halves.
    while(left<=mid && right<=high){
        if(arr[left]<= arr[right]){
            temp.push(arr[left])
            left++
        }else{
            temp.push(arr[right])
            count += mid - left + 1
            right++
        }
    }
    while(left<= mid){
        temp.push(arr[left])
        left++
    }

    while(right<= high){
        temp.push(arr[right])
        right++
    }


    for(let i=low;i<=high;i++){
        arr[i] = temp[i-low]
    }
    return count
}
// Note : Total inversion = left inversion + right inversion + cross inversion

function MergeSort(low,high,arr){
    if(low>=high){
        return 0
    }

    const mid = Math.floor((low+high)/2)

    let count = 0

    let leftHalf = MergeSort(low,mid,arr)

    let rightHalf = MergeSort(mid+1,high,arr)

    let crossInversion = merge(low,mid,high,arr)

    count = leftHalf + rightHalf + crossInversion

    return count
    
}

function countInversion(arr){
    return MergeSort(0,arr.length-1,arr)
}