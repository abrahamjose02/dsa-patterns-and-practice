// Median of Two Sorted Arrays

//  Problem Statement

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.


var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1,...nums2].sort((a,b)=>a-b)
    let middleIndex = Math.floor(mergedArray.length/2)
    if(mergedArray.length % 2 ===0){
       return mergedArray[middleIndex]
    }
    else{
        return (mergedArray[middleIndex-1] + mergedArray[middleIndex])/2
    }
}

nums1 = [1,3], nums2 = [56, 73,2]

console.log("Median",findMedianSortedArrays(nums1,nums2))


// The best practice method to solve the above problem using the requird pattern is :

// Binary Search Partition  : Here binary search is used to find the correct cut / partition between two sorted Arrays

// If we completely merge the two sorted arrays it makes the complexity of O(M + N) 

// Ideal case of complexity here should be O(log(min(m, n)))

// Binary search works like:

// cut search space in half each time

// Suppose:

// cut1 = partition in nums1
// cut2 = partition in nums2

// Then define:

// l1 = left biggest in nums1
// r1 = right smallest in nums1
// l2 = left biggest in nums2
// r2 = right smallest in nums2

// l1 <= r2 && l2 <= r1

// l1 <= r2 means left part of array1 fits with right part of array2
// l2 <= r1 means left part of array2 fits with right part of array1

// If both are true, then the entire left half is smaller than or equal to the entire right half.