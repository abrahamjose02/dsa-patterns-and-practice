class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}


function traverseBackward(head){
    if(head === null){
        return null
    }
    let temp = head
    while(temp.next !==null){
        temp = temp.next
    }
    while(temp !== null){
        console.log(temp.data)
        temp = temp.prev
    }
    
}