function filterObj(obj) {
    return Object.entries(obj)
        .filter(([key, value]) => !Array.isArray(value) && typeof value === 'object' ? false : true)
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
}

const obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: { call: "cellphone" },
    d: "Dog"
};

console.log(filterObj(obj));  // { a: "Apple", d: "Dog" }
