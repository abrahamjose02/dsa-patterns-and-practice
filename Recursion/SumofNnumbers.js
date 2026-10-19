
//Parameterized Recursion

function SumofNNumbers(n,acculmulator){
    if(n===0){
        console.log(acculmulator)
        return;
    }
    SumofNNumbers(n-1,acculmulator+n)
}

SumofNNumbers(5,0)

// Functional Recursion


function Sum(n){
    if(n===0){
        return 0
    }
    return n + Sum(n-1)
}

Sum(5)

