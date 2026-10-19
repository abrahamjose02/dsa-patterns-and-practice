function PrintName5Times(n){
    if(n === 0) return; // base case
    console.log("Abraham")
    PrintName5Times(n-1) // recursion function
}

PrintName5Times(5)

// Approach using i and n

function PrintName5Times1(i,n){
    if(i>n) return; // base case
    console.log("Abraham")
    PrintName5Times1(i+1,n) // recursion function
}

PrintName5Times1(1,5)