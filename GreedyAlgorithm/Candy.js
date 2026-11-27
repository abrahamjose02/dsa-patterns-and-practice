function Candy(ratings){
    let n = ratings.length
    let sum = 0
    let candies = new Array(n).fill(1)
    for(let i=1;i<n;i++){
        if(ratings[i] > ratings[i-1]){
            candies[i] = Math.max(candies[i],candies[i-1] + 1)
        }
    }
    for(let i=n-2;i>=0;i--){
        if(ratings[i] > ratings[i+1]){
            candies[i] = Math.max(candies[i],candies[i+1] + 1)
        }
    }
    for(let i=0;i<candies.length;i++){
        sum += candies[i]
    }
    return sum
}
// Time compleixy is : O(4N) and Space is O(N)

// Another Approach

// Slop Algorithm
// The intuition is to treat the ratings as ascending and descending slopes.
var candy = function(ratings) {
    let n = ratings.length
    let sum = 1
    let i = 1
    while(i<n){
        
        if(ratings[i] === ratings[i-1]){
            sum+= 1
            i++
            continue;
        }
        let peak = 1
        while(i<n && ratings[i] > ratings[i-1]){
            peak++
            sum += peak
            i++
        }
        let down = 1
        while(i<n && ratings[i] < ratings[i-1]){
            sum += down
            down++
            i++
        }
        if(down > peak){
            sum += down - peak
        }
    
    }
    return sum
};

//Notes : 

// - Higher rating does not mean candies equal to the rating.
// - Equal ratings do not require equal candies.
// - Both neighbouring constraints must be satisfied.
// - Remember why Math.max() is necessary in the two-pass approach.
// - Initialize peak and down to 1 for each new mountain.
// - Process entire slopes using inner while loops, not else if.
// - Ascending: increment first, add second.
// - Descending: add first, increment second.
// - Correct the peak only after completing both slopes.
// - Never reduce the peak when down is smaller.
// - Avoid an additional i++ outside the inner loops.