// here we are using two pointers 
function ReverseArray(arr,left,right){
    if(left >= right) return ;
    [arr[left],arr[right]] = [arr[right],arr[left]]
    ReverseArray(arr,left+1,right-1)
}

let arr = [1,2,3,4]
ReverseArray(arr,0,3)
console.log(arr)


// We need to do it by a single pointer as well:

function ReverseArray1(arr,i){
    let n = arr.length
    if(i>=n/2)return;
    [arr[i],arr[n-i-1]] = [arr[n-i-1],arr[i]]
    ReverseArray1(arr,i+1)
}

ReverseArray1(arr,0)
console.log(arr)