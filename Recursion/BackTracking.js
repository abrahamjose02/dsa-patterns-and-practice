// Solving the problem using BackTracking 
// here we can't use the i+1 
function PrintLinearly1toN(i,n){
    if(i<1) return;
    PrintLinearly1toN(i-1,n)
    console.log(i)
}