const readline = require('readline');
// const process = require('process');

const createNode = (value, next = null) => {
    return {
        value,
        next
    };
}

// const addNodeIntoLastNode = (value, lastNode) => {
//     const newNode = createNode(value);
//     lastNode.next = newNode;
//     return lastNode
// };

class LinkedList {
    constructor(value) {
        if (value) {
            this.lastNode = createNode(value);
            this.lastNode.next = null;
            this.head = this.lastNode;
        }
    }
    addNode(value) {
        const newNode = createNode(value);
        this.lastNode.next = newNode;
        this.lastNode = newNode;
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let linkedList;
rl.prompt()
rl.on('line', (value) => {
    if (!linkedList) {
        linkedList = new LinkedList(value);
    } else {
        linkedList.addNode(value);
    }
});
rl.prompt();
rl.on('close', function () {
    const head = linkedList.head;
    let node = null
    do {
        if (!node) {
            console.log(`value is: [${head.value}]`);
            node = head.next
        } else {
            console.log(`value is: [${node.value}]`);
            node = node.next;
        }
    } while (node && node.value);
});

