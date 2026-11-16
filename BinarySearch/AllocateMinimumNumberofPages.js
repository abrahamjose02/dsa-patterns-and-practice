//Allocate Minimum Number of Pages (Book Allocation)

//Remember this pattern : 
//Whenever items cannot be split and we want to minimize the maximum workload, the search boundaries are often:

function countStudents(arr,maxPages){
    let students = 1
    let currentPages = 0
    for(let page of arr){
        currentPages += page
        if(currentPages > maxPages){
            students++
            currentPages = page
        }
    }
    return students
}

function findPages(arr,m){
    if(m > arr.length) return -1
    let low = Math.max(...arr)
    let high = arr.reduce((sum,page)=> sum + page , 0)
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let studentsRequired = countStudents(arr,mid)
        if(studentsRequired <= m){
            ans = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
}
// Notes for boundary selection

// 1. low = Math.max(...arr) — Each book must be allocated entirely to one student. Therefore, the maximum page limit cannot be smaller than the largest book.
// 2. high = arr.reduce((sum, pages) => sum + pages, 0) — The sum of all pages is a safe upper bound because no student can receive more than the total pages.
// 3. mid = Math.floor((low + high) / 2) — Represents the maximum number of pages we're allowing any individual student to receive.
// 4. if (m > arr.length) return -1 — Allocation is impossible because every student must receive at least one book.


//Notes for problem
// 1. Return -1 if m > arr.length; otherwise, set low = max(arr) and high = sum(arr).
// 2. Greedily allocate contiguous books, starting a new student whenever the running page total exceeds mid.
// 3. If studentsRequired <= m, save mid and search left to minimize the maximum pages; otherwise, search right.
// 4. Return the smallest feasible maximum page limit stored in ans.