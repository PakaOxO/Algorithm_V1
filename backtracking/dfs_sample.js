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

/* 깊이우선탐색 */
function dfs(startNode) {
    let nextNode = []; // Stack(스택)
    let visited = [];

    nextNode.push(startNode);

    while (nextNode.length > 0) {
        const currNode = nextNode.pop(); // LIFO(후입선출)
        if (!visited.includes(currNode)) {
            visited.push(currNode);
            nextNode = [...nextNode, ...myGraph[currNode].reverse()];
            console.log(nextNode);
        }
    }
    return visited;
}

console.log(dfs(0)); // [0, 1, 3, 4, 2, 5, 6]