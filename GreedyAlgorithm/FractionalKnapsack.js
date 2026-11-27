function FractionalKnapsack(values, weights, capacity){
    let items = values.map((value,index)=>({
        value:value,
        weight:weights[index]
    }))
    items.sort((a,b)=>b.value/b.weight - a.value/a.weight)
    let totalValue = 0
    for(let i=0;i<items.length;i++){
        if(items[i].weight <= capacity){
            totalValue += items[i].value
            capacity -= items[i].weight
        }
        else{
            let fractionalValue = items[i].value/items[i].weight * capacity
            totalValue += fractionalValue
            break;
        }
    }
    return totalValue
}

//Notes:

// - Sort by value-to-weight ratio, not individual value or weight.
// - Descending comparator: b.value/b.weight - a.value/a.weight.
// - Use .value and .weight to access object properties.
// - Entire item fits when weight <= capacity.
// - Add value to totalValue, not weight.
// - Subtract weight from capacity.
// - Fractional value = (value / weight) * capacity.
// - Break immediately after taking a fractional item.
// - Return totalValue.
// - Understand why the Exchange Argument guarantees optimality.
// - Greedy does not guarantee an optimal solution for 0/1 Knapsack.
// - Time: O(N log N), Space: O(N).