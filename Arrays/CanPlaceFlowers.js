function CanPlaceFlowers(flowerbeds,n){
    for(let i=0;i<flowerbeds.length;i++){
        let EmptySpace = flowerbeds[i] === 0
    let leftSpaceEmpty = i === 0 || flowerbeds[i-1] === 0
    let rightSpaceEmpty = i === flowerbeds.length -1  || flowerbeds[i+1] === 0

    if(EmptySpace && leftSpaceEmpty && rightSpaceEmpty){
        flowerbeds[i] = 1
        n--
        if(n===0){
            return true
        }
    }
    }
    return n<=0
}

let flowerbed = [1,0,0,0,1], n = 2

console.log(CanPlaceFlowers(flowerbed,n))
