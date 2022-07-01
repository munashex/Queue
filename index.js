class Node {
    constructor(val){
        this.val = val 
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null 
        this.last = null 
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val) 
        if(!this.first) {
            this.first = newNode 
            this.last = newNode
        }else {
            this.last.next = newNode 
            this.last = newNode
        }
        this.size++
        return this
    }

    dequeue() {
        if(!this.size) return null  
 
         let temp = this.first 
         if(this.first === this.last){
            this.last = null
         }
         this.first = this.first.next 
         return temp
    }
}

let list = new Queue() 
list.enqueue("munashe") 
list.enqueue("tinashe")
list.dequeue()
list.dequeue()
console.log(list)