function KthElementOfTwoSortedArray(arr1,arr2,k){
    if(arr1.length > arr2.length){
        return KthElementOfTwoSortedArray(arr2,arr1)
    }
    let n = arr1.length
    let m = arr2.length
    let low = Math.max(0,k-m) // cut1 min = k - m , cut2<=m , cut2 can increase till m
    let high = Math.min(n,k)
    while(low<=high){
        let cut1 = Math.floor((low + high)/2)
        let cut2 = k - cut1
        let l1 = cut1 === 0 ? -Infinity : arr1[cut1 - 1]
        let r1 = cut1 === n ? Infinity : arr1 [cut1]
        let l2 = cut2 === 0 ? -Infinity : arr2[cut2 -1]
        let r2 = cut2 === m ? Infinity : arr2[cut2]
        if(l2<=r1 && l1<=r2){
            return Math.max(l1,l2)
        }
        if(l2>r1){
            low = cut1 + 1
        }
        else{
            high = cut1 - 1
        }
    }
}

