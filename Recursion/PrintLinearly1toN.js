function PrintLinearly1toN(i,n){
    if(i>n) return;
    console.log(i)
    PrintLinearly1toN(i+1,n)
}

PrintLinearly1toN(1,10)

// Time and Space complexity is O(n)

