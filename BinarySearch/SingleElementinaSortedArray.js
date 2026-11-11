function SingleElementInASortedArray(nums){
    let map = new Map()
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1)
    }
    for(const [key,value] of map){
        if( value === 1){
            return key
        }
    }
    return -1
}

// The above solution is brute force with Time complexity of O(n) and the
// The space complexity of O(n)


// We want the below solution to be optimal with , Auxillary Space complexity as O(1)
// For that we need to use the binary search method to solve the problem

// Note
// 1. Every element appears exactly twice, except one.
// 2. The array is sorted, so identical elements are adjacent.

// This is the key observation:
// - Before the single element: pairs follow even → odd.
// - After the single element: pairs follow odd → even.

// Mid parity	    Comparison	                Single element
// Even         nums[mid] === nums[mid+1]	Right
// Even	        nums[mid] !== nums[mid+1]	Not enough information alone
// Odd	        nums[mid] === nums[mid+1]	Left
// Odd	        nums[mid] !== nums[mid+1]	Not enough information alone

// Example :
// nums = [1, 1, 2, 2, 3, 4, 4]
// mid = 3

// mid = 3 is odd.
// nums[3] === nums[2].
// Therefore, the pair occupies indices (2,3).

//Before the single element, pairs start at EVEN indices and end at ODD indices.

// Here, the pair starts at index 2 (even) and ends at index 3 (odd).

// That means the pairing pattern is still intact at mid.

// Therefore, the single element must be somewhere after this pair.

// The optmized Solution is as follows : 
function isEvenIndex(index){
    if(index % 2 === 0){
        return true
    }
    return false
}
function singleNonDuplicate(nums){
    let n = nums.length
    let low = 0
    let high = n - 1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let isMidEven = isEvenIndex(mid)
        if(nums[mid] === nums[mid-1]){
            
            if(isMidEven){
                high = mid - 1
            }
            else{
                low = mid + 1
            }
        }
        else if(nums[mid] === nums[mid+1]){
            if(isMidEven){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
        else{
            return nums[mid]
        }
    }
    return -1
}