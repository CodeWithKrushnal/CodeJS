function example() {
    for (let i = 0; i < 5; i++) {
      if (i === 2) {
        return "Returned at i = 2";
      }
    }
    return "Loop Finished"; // This won't be reached.
  }
  console.log(example()); // Output: "Returned at i = 2"
  