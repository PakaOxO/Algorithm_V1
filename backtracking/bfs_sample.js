/* 인접리스트 그래프 */
const myGraph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5, 6],
    3: [1],
    4: [1],
    5: [2],
    6: [2]
}

/* 너비우선탐색 */
function bfs(startNode) {
    let nextNode = []; // Queue(큐)
    let visited = [];

    nextNode.push(startNode);

    while (nextNode.length > 0) {
        const currNode = nextNode.shift(); // FIFO(선입선출)
        if (!visited.includes(currNode)) {
            visited.push(currNode);
            nextNode = [...nextNode, ...myGraph[currNode]];
        }
    }
    return visited;
}

console.log(bfs(0)); // [0, 1, 2, 3, 4, 5, 6]