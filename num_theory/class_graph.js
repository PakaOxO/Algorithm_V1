class Graph {
    constructor() {
        this.nodes = new Map();
    }

    /* getter */
    get size() {
        return this.nodes.size;
    }

    get connections() {
        return this.nodes;
    }

    /* 노드 추가 */
    addNode(node) {
        if (this.nodes.has(node)) return;
        this.nodes.set(node, []);
    }

    /* 노드 제거 */
    deleteNode(node) {
        const connectedInfo = this.nodes.get(node);
        connectedInfo.forEach((to) => {
            const newConn = this.nodes.get(to).filter((itm) => itm !== node);
            this.nodes.set(to, newConn);
        })
        this.nodes.delete(node);
    }

    /* 간선 추가 */
    addEdge(from, to) {
        if (!this.nodes.has(from)) this.addNode(from)
        if (!this.nodes.has(to)) this.addNode(to);

        this.nodes.set(from, [...this.nodes.get(from), to]);
        this.nodes.set(to, [...this.nodes.get(to), from]);
    }

    /* 간선 확인 */
    checkEdge(from, to) {
        let result = false;
        this.nodes.get(from).includes(to) ? result = true : result = false;
        return result;
    }
}

const g = new Graph();
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
console.log(g.connections);
console.log(g.checkEdge(1, 2));
g.deleteNode(2);
console.log(g.connections);
console.log(g.checkEdge(1, 2));