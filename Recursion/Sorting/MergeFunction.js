// Merge function 

function Merge(left,right){
    const result = []
    let i = 0
    let j = 0
    while(i<left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }

    while(i<left.length){
        result.push(left[i])
        i++
    }

    while(j<right.length){
        result.push(right[i])
        j++
    }
    return result
}

console.log(Merge([3, 8], [1, 5]));

// i and j are independent pointers for the left and right arrays.

// The first while loop runs only while both arrays still have elements.

// The remaining loops append whichever elements haven't been consumed.