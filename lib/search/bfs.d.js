"use strict";
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
* bfs(graph, 1, 13) // [ 1, 5, 6, 10, 13 ]
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (graph, startNode, targetNode) => {
    const buildPath = (parents) => {
        const result = [targetNode];
        while (parents[targetNode] !== 0) {
            targetNode = parents[targetNode];
            result.push(targetNode);
        }
        return result.reverse();
    };
    const queue = [startNode];
    const visited = [startNode];
    const parents = [];
    parents[startNode] = 0;
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
        });
    }
    throw 'Path not found';
};
