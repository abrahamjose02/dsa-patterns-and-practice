function LongestConsecutiveSequence(nums){
    let set = new Set(nums)
    let maxLength = 0
    for(let num of set){
        let count = 1
        let previousNumber = num - 1
        if(!set.has(previousNumber)){
            while(set.has(num+1)){
                count++
                num++
            }
        }
        maxLength = Math.max(maxLength,count)
    }
    return maxLength
}