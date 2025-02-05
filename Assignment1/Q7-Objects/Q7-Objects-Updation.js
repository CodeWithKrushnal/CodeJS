const originalObj = {
    name: "Harry Potter",
    age: 12,
    address: {
        details: ["4", "Privet Drive"],
        area: "Little Whinging",
        city: "Surrey",
        state: "England"
    }
};

const updatedObj = {
    ...originalObj,
    address: {
        ...originalObj.address,
        details: [
            "5",  // updated the first element
            ...originalObj.address.details.slice(1)  // retain the rest
        ]
    }
};

console.log(updatedObj);
