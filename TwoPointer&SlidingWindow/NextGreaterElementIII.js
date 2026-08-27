function NextGreaterElementIII(nums){
    let digits = String(nums).split("")
    let i = digits.length - 2
    while(i>=0 && digits[i] >= digits[i+1]){
        i--
    }
    if(i<0){
        return -1
    }
    let j = digits.length - 1
    while(digits[j]<= digits[i]){
        j--
    }
    [digits[i],digits[j]] = [digits[j],digits[i]]

    let left = i+1
    let right = digits.length - 1
    while(left<right){
        [digits[left],digits[right]] = [digits[right],digits[left]]
        left++
        right--
    }
    let result = Number(digits.join(""))
    if(result >= 2147483648) return -1
    return result
}

let nums = 12453
console.log(NextGreaterElementIII(nums))

// digits[i]<digits[i+1] - so the i-th value should be the pivot
// 4 is the pivot 
// then we have to swap the 4 with its highest value so 4 has to be swapped with the value highest than it
// which is 5
// 12543
