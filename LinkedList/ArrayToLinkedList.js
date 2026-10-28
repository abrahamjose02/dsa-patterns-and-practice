class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}



function ArrayToLinkedList(arr){
    if(arr.length === 0){
        return null
    }

    let head = new Node(arr[0])
    let mover = head

    for(let i=0;i<arr.length;i++){
        const newNode = new Node(arr[i])

        mover.next = newNode
        mover = newNode
    }
    return head
}

const arr = [10, 20, 30, 40]
const head = ArrayToLinkedList(arr);

let temp = head

while(temp){
    console.log(temp.data)
    temp = temp.next
}