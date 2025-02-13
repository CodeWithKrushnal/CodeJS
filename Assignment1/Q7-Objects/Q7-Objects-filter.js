function filterObj(obj) {
    return Object.entries(obj) //Object.entries method returnes an array of keys and values present in the passed object
        .filter(([key, value]) => Array.isArray(value) || typeof value === 'object') // filtered all the values that are either arrays or objects
        .reduce((acc, [key]) => { // reducing the keys into accumulator and returning it
            acc.push(key);
            return acc;
        }, []);// Chaining the output of entries method to filter on basis of our criteria
}

// Unchained Version of the Operations above
// arr = Object.entries(obj)
// filtered = arr.filter(([key, value]) => !Array.isArray(value) || typeof value === 'object')
// out = filtered.reduce((acc, [key]) => {
//     acc.push(key)
//     return acc
// }, []);

const obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: { call: "cellphone" },
    d: "Dog"data.data.sort((a, b) => { return (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0) });
};

console.log(filterObj(obj));  // ['b','c']