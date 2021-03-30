//Basic string to hashcode function. It takes in the string and it loops through the first 3 letters and creates a unique code from that.
//The hash function then returns the rounded value of the hash code created divided by the length of the string
//This hash function is not perfect, it's just a decent function to use to test (rarely collides)
function hashString (string) {
    let hash = 7;
    for (let i=0; i < 3; i++) {
        hash += (hash * string.charCodeAt(i));
    };
    return Math.floor((hash / string.length));
};

//Constructor class for the hashmap 
class HashMap {
    //Constructor that composese the map with the native JS map function
    constructor(hashMap) {
        this.hashMap = new Map();
    };
    //Sets the item by passing the key value through the hash function to produce an index where the value resides at within the table
    setItem = (key, value) => {
        this.hashMap.set(hashString(key), value);
    };
    //Retrieves the item by hashing the key and getting the values out of the table
    getItem = (key) => {
        if(this.hashMap.get(hashString(key))) {
            return this.hashMap.get(hashString(key));
        } else {
            return "not found";
        }

    };
};

//Test cases
const table = new HashMap();
table.setItem("foo", "foo bar baz");
table.setItem("brandon", {
    name: "brandon lee piercy",
    age: "22",
    occupation: "software engineer"
});
console.log(table.getItem("foo"));
console.log(table.getItem("brandon"));
console.log(table.getItem("chad"));