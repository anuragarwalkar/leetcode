var calcEquation = function(equations, values, queries) {
    const graph = {};
  
    // Step 1: Build the graph
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
  
        if (!(a in graph)) graph[a] = {};
        if (!(b in graph)) graph[b] = {};
  
        graph[a][b] = value;
        graph[b][a] = 1 / value; // inverse
    }
  
    // Step 2: Perform DFS to compute division
    const dfs = (start, end, visited) => {
        if (!(start in graph) || !(end in graph)) return -1;
        if (start === end) return 1;
        if (end in graph[start]) return graph[start][end];
  
        visited.add(start);
  
        for (const neighbor in graph[start]) {
            if (!visited.has(neighbor)) {
                const value = dfs(neighbor, end, visited);
                if (value !== -1) {
                    return graph[start][neighbor] * value;
                }
            }
        }
  
        return -1;
    };
  
    // Step 3: Compute queries
    const results = [];
    for (const [start, end] of queries) {
        results.push(dfs(start, end, new Set()));
    }
  
    return results;
  };
  
  console.log(calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]))
  