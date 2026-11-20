//Binary search on Partitions


function MedianOfTwoSortedArray(num1,num2){
    if(num1.length > num2.length){
        return MedianOfTwoSortedArray(num2,num1)
    }
    let n = num1.length
    let m = num2.length
    let leftSize = Math.floor((n+m+1)/2)
    let low = 0
    let high = n
    while(low<=high){
        let cut1 = Math.floor((low + high)/2)
        let cut2 = leftSize - cut1
        let l1 = cut1 === 0 ? -Infinity : num1[cut1 - 1]
        let r1 = cut1 === n ? Infinity : num1[cut1]
        let l2 = cut2 === 0 ? -Infinity : num2[cut2 - 1]
        let r2 = cut2 === m ? Infinity : num2[cut2]
        if(l2<=r1  && l1<=r2){
            if((n+m) % 2 === 1){
                return Math.max(l1,l2)
            }
            else{
                return (Math.max(l1,l2) + Math.min(r1,r2))/2
            }
        }
        if(l2>r1){
            low = cut1 + 1
        }
        else{
            high = cut1 - 1
        }
    }
}