
//Functional

function Factorial(n){
    if(n<=1) return 1
    return n * Factorial(n-1)
}

console.log(Factorial(3))


// Parameterized

function Factorial1(n,acculmulator){
    if(n<=1){
        console.log(acculmulator)
        return
    }
    Factorial1(n-1,acculmulator * n)
}

Factorial1(3,1)

//Time complexity - O(n)
//Space Complexity - O(n)