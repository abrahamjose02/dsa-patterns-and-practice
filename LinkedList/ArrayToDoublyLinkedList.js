class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}

function convertArrayToDLL(arr){
    if(arr.length === 0) return null;
    let head = new Node(arr[0])
    let temp = head
   for(let i=1;i<arr.length;i++){
    const newNode = new Node(arr[i])
    temp.next = newNode
    newNode.prev = temp
    temp = newNode
   }
   return head
}

const arr = [10, 20, 30, 40];

console.log(convertArrayToDLL(arr))