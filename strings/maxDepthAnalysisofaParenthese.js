
function maxDepthAnalysisOfaParenthese(s) {
    let depth =0
    let maxdepth =0
    for(let char of s){
        if(char === "("){
            depth++
            maxdepth = Math.max(maxdepth,depth)
        }
        else if(char === ")"){
            depth--
        }
        else{
            continue;
        }
    }
    return maxdepth
};