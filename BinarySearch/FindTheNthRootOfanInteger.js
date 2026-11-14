function NthRootOfAnInteger(n,m){
    let low = 1
    let high = m

    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let power = mid ** n
        if(power === m){
            return mid
        }
        if(power < m){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
}

//Notes:
