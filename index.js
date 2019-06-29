/*
* @example
* graph = [
*     [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
*     [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
*     [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
*     [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
*     [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
*     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
*     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
*     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
*     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
*     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
*     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
*     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
*     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
*     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
* ];
* dfs(graph, 1, 13) // [ 1, 5, 6, 10, 13 ]
* bfs(graph, 1, 13) // [ 1, 5, 6, 10, 13 ]
*/

const bfs = (graph, startNode, targetNode) => {
    const buildPath = (parents) => {
        const result = [targetNode];
        while (parents[targetNode] !== null) {
            targetNode = parents[targetNode];
            result.push(targetNode);
        }
        return result.reverse();
    };
    const queue = [startNode];
    const visited = [startNode];
    let parents = [];
    parents[startNode] = null;
    while (queue.length) {
        const node = queue.shift();
        if (node === targetNode) {
            return buildPath(parents);
        }
        graph[node].forEach((line, index) => {
            if (index !== node && line && !visited.includes(index)) {
                queue.push(index);
                visited.push(index);
                parents[index] = node;
            }
        })
    }
    return false;
};

const dfs = (graph, startNode, targetNode) => {
    const buildPath = (parents) => {
        const result = [targetNode];
        while (parents[targetNode] !== null) {
            targetNode = parents[targetNode];
            result.push(targetNode);
        }
        return result.reverse();
    };
    const stack = [startNode];
    const visited = [startNode];
    let parents = [];
    parents[startNode] = null;
    while (stack.length) {
        const node = stack.pop();
        if (node === targetNode) {
            return buildPath(parents);
        }
        graph[node].forEach((line, index) => {
            if (index !== node && line && !visited.includes(index)) {
                stack.push(index);
                visited.push(index);
                parents[index] = node;
            }
        })
    }
    return false;
};

exports.dfs = dfs;
exports.bfs = bfs;