const arr = [1, 3, 3, 3, 6, 8, 10];
const x = 3;

function upperBound(arr, x) {
    let n = arr.length
    let low = 0
    let high = n-1
    let ans = n
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(arr[mid] > x){
            ans = mid
            high = mid -1
        }
        else{
            low = mid+1
        }
    }
    return ans
}

console.log(upperBound(arr,x))

// Time: (O(log n)) 
// Auxiliary space: (O(1))