// For example, given this problem
//Given these airports and routes model it as a graph
const airports = ['PHX', 'BKK', 'OKC', 'JFK', 'LAX', 'MEX', 'EZE', 'HEL', 'LOS', 'LAP', 'LIM'];

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
]

//Since there are not that many routes relatively to the maximum number of possible combinations between the nodes, an adjacency matrix would have a bunch of 0s (wasted space)
//Therefore go with an adjacency list
//Remember adjancency list is a set of key value pairs

const adjacencyList = new Map();
//setting the adjacency list as a map.

//This is the add function for a graph, just add the node to the adjacency list and set an empty array as the pair to the key
function addNode(airport) {
    adjacencyList.set(airport, []);
};

//This is how you add an edge in an Undirected graph. You actually add two pointers but you add them at the same time so they point to one another.
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

//Create the graph utilizing the defined functions and the given data set.
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

//This will log adjacency list, which represents a graph, to the console.
console.log(adjacencyList);

//Now say you are asked to find whether or not a specific route exists between any two given airports
//You are being asked to search your data for whether or not a specific edge exists.
//You can accomplish this with a Depth-First Search or a Breadth-First Search

//BFS Breadth First Search
//BFS goes down the tree, start with a specific node and check if connections have 
function bfs(start, dest) {
    const visited = new Set();
    const q = [start];
    while (q.length > 0) {
        const airport = q.shift();
        const destinations = adjacencyList.get(airport);
        for (const destination of destinations) {
            if (!visited.has(destination)) {
                visited.add(destination);
                q.push(destination);
                if (destination === dest) {
                    console.log(`Yes a flight exists between ${start} and ${dest}`);
                }
            }
        }
    }
}

//Depth First Search
function dfs(start, dest, visited = new Set()) {
    //Searching if a connection exists between the start, destination and need to establish a visited Set to help the graph traverser kick out.
    visited.add(start);
    //Grab the known destinations for the given start from the adjacency list
    const destinations = adjacencyList.get(start);
    //For each destination in list retrieved from the adjacency list
    for (const destination of destinations) {
        //If our tracker set does not already have the destination being checked (if the value has not been checked already)
        if (!visited.has(destination)) {
            //Then add the destination to our tracker so it doesn't get re-checked
            visited.add(destination);
            //And if the destination being checked matches the destination given, kick out and confirm.
            if (destination === dest) {
                console.log (`Flight between ${start} and ${dest} found.`);
                return;
            }
        }
    }
}

dfs('PHX','JFK');
dfs('JFK','OKC');