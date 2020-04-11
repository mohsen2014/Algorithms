const readline = require('readline');

class LinkedList {
    constructor(value) {
        if (value) {
            this.lastNode = this.createNode(value);
            this.lastNode.next = null;
            this.head = this.lastNode;
        }
    }
    addNode(value) {
        const newNode = this.createNode(value);
        this.lastNode.next = newNode;
        this.lastNode = newNode;
    }


    createNode(value, next = null) {
        return {
            value: `${value}`,
            next
        };
    }
    search(value) {
        const findList = []
        let node = this.head;
        do {
            if (node.value.includes(value)) {
                findList.push(node)
            }
            node = node.next;
        } while (node && node.value);
        return findList;
    }

    remove(value) {
        let node = this.head;
        let prevNode = null;
        do {
            if (node.value == value) {
                if (!prevNode) {
                    console.log("you have not permission for remove head")
                } else {
                    prevNode.next = node.next;
                    return;
                }
            }
            prevNode = node
            node = node.next;
        } while (node && node.value);
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let linkedList;
rl.prompt()
rl.on('line', (value) => {
    if (Number.isInteger(+value)) {
        if (!linkedList) {
            linkedList = new LinkedList(value);
        } else {
            linkedList.addNode(value);
        }
    } else if (value.startsWith('s')) {
        const searchValue = value.split(' ')[1];
        const nodes = linkedList.search(searchValue);
        if (Array.isArray(nodes)) {
            console.log(`search result: [${nodes.map(n => n.value).join(', ')}]`)
        } else {
            console.log(`no result`);
        }
    } else if (value.startsWith('r')) {
        const searchValue = value.split(' ')[1];
        linkedList.remove(searchValue);
        console.log('remove complit')
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

