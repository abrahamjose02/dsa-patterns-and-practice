function Fibonacci(n){
    if(n<=1) return n
    return Fibonacci(n-1) + Fibonacci(n-2)
}

console.log(Fibonacci(6))

// Here the Time complexity is exponential in nature : O(2^n) Two to the power of n
