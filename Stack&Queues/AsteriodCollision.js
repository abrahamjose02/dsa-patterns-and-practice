function AsteriodCollisions(asteroids){
    let n = asteroids.length
    let stack = []
    for(let i=0;i<n;i++){
        let destroyed = false
        let current = asteroids[i]
        while(stack.length > 0 && stack[stack.length-1] > 0 && current < 0){
            let top = stack[stack.length-1]
            if(top < Math.abs(current)){
                stack.pop()
            }
            else if(top === Math.abs(current)){
                stack.pop()
                destroyed = true
                break;
            }else{
                destroyed = true
                break;
            }
        }
        if(!destroyed){
            stack.push(current)
        }
    }
    return stack
}

let asteroids = [5, 10, -5]

console.log(AsteriodCollisions(asteroids))