//Minimized Maximum of Products Distributed to Any Store

function countStores(quantities,maxProduct){
    let stores = 0
    for(let quantity of quantities){
        stores += Math.ceil(quantity/maxProduct)
    }
    return stores
}
var minimizedMaximum = function(n, quantities) {
    let low = 1
    let high = Math.max(...quantities)
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let storesRequired = countStores(quantities,mid)
        if(storesRequired <= n){
            ans = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
};