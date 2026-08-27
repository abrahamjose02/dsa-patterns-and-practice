
//better solution
function FruitsIntoBasket(fruits){
    let n = fruits.length
    let left = 0
    let maxLength = 0
    const freq = new Map()
    for(let right = 0 ; right < n ; right ++){
        let rightFruit = fruits[right]
        freq.set(rightFruit,(freq.get(rightFruit)||0)+1)
        while(freq.size > 2){
            let leftFruit = fruits[left]
            freq.set(leftFruit,freq.get(leftFruit)-1)
            if(freq.get(leftFruit) === 0){
                freq.delete(leftFruit)
            }
            left++
        }
        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength
}

fruits = [1,2,3,2,2]

console.log(FruitsIntoBasket(fruits))


//optimal solution

function FruitsIntoBasket(fruits){
    let n = fruits.length
    let left = 0
    let maxLength = 0
    const freq = new Map()
    for(let right = 0 ; right < n ; right ++){
        let rightFruit = fruits[right]
        freq.set(rightFruit,(freq.get(rightFruit)||0)+1)
        if(freq.size > 2){
            let leftFruit = fruits[left]
            freq.set(leftFruit,freq.get(leftFruit)-1)
            if(freq.get(leftFruit) === 0){
                freq.delete(leftFruit)
            }
            left++
        }
        if(freq.size <= 2){
            maxLength = Math.max(maxLength,right-left+1)
        }
    }
    return maxLength
}