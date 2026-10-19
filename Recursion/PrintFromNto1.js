function printFromNto1(i,n){
    if(i>n) return;
    printFromNto1(i+1,n)
    console.log(i)
}

printFromNto1(1,10)

// Time and Space complexity is O(n)

// Another way to do the problem is : 

function PrintLinearlyNto1s(i,n){
    if(i<1) return ;
    console.log(i)
    PrintLinearlyNto1s(i-1,n)
}

PrintLinearlyNto1s(5,5)