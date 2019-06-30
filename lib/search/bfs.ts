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

export function bfs(graph: number[][], startNode: number, targetNode: number): number[] {
    const buildPath = (parents: number[]) => {
        const result: number[] = [targetNode];
        while (parents[targetNode] !== 0) {
            targetNode = parents[targetNode];
            result.push(targetNode);
        }
        return result.reverse();
    };
    const queue: number[] = [startNode];
    const visited: number[] = [startNode];
    const parents: number[] = [];
    parents[startNode] = 0;
    while (queue.length) {
        const node = queue.shift() as number;
        if (node === targetNode) {
            return buildPath(parents);
        }
        graph[node].forEach((line: number, index: number) => {
            if (index !== node && line && !visited.includes(index)) {
                queue.push(index);
                visited.push(index);
                parents[index] = node;
            }
        })
    }
    throw 'Path not found'
};
