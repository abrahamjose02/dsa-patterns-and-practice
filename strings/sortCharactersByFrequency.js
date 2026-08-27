function sortCharactersByFreq(s){
    let map = new Map()
    for(let char of s){
        map.set(char,(map.get(char)|| 0)+1)
    }


    let sorted = [...map.entries()].sort((a,b)=>b[1]-a[1])
    
    // map.entries() - It will return a new Map Iterator object
    // containing [key,value] pairs for each elements in the map.

    // The iterator would yield the below value : 
    //      ['t', 1]
    //      ['r', 1] 
    //      ['e', 2]

    let result = ""
    for(let [char,count] of sorted){
        result += char.repeat(count)
    }
    return result
}

s = "tree"
// console.log(sortCharactersByFreq(s))

//Optimal Method of solving using bucket

// Use Bucket Sort when:

// You are sorting by a count/frequency
// The count range is limited, usually from 1 to n
// You need descending or ascending order by that count

//Frequency values can only be: 1 to s.length

function sortCharactersByFreq1(s){
    let freq = new Map()
    for(let char of s){
        freq.set(char,(freq.get(char)||0)+1)
    }
    let buckets = Array.from({length:s.length+1},()=>[]);

    for(let [char,frq] of freq){
        buckets[frq].push(char)
    }
    console.log(buckets)

    let result =""

    for(let frq=buckets.length-1;frq>=0;frq--){
        for(let char of buckets[frq]){
            result += char.repeat(frq)
        }
    }
    return result
}

console.log(sortCharactersByFreq1(s))