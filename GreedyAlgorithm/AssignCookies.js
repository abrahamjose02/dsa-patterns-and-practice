function AssignCookies(g,s){
    let n = g.length
    let m = s.length
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    let i=0
    let j=0
    while(i < n && j < m){
        if(s[j] >= g[i]){
            childContent++
            i++
            j++
        }
        else{
            j++
        }
    }
    return i++
}
// Time: O(nlog n + mlog m)
// Space: (O(1)) excluding sorting.