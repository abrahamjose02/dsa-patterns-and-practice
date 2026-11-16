

function canPlaceMagnets(position,m,distance){
    let magnetPlaced = 1
    let lastMagneticPosition = position[0]
    for(let i=1;i<position.length;i++){
        if(position[i] - lastMagneticPosition >= distance){
            magnetPlaced++
            lastMagneticPosition = position[i]
        }
    }
    return magnetPlaced >= m
}
var maxDistance = function(position, m) {
    position.sort((a,b)=>a-b)
    let low = 1
    let high = position[position.length - 1] - position[0]
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let IsMagnetPlaced = canPlaceMagnets(position,m,mid)
        if(IsMagnetPlaced){
            ans = mid
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return ans
};