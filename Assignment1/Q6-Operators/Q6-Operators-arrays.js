// Sample array of objects
const users = [
    { id: 1, first_name: "Nicki", email: "ncrozier0@squarespace.com", date_of_birth: "2009/05/09" },
    { id: 2, first_name: "Raychel", email: "rmcgrady1@cpanel.net", date_of_birth: "1996/11/05" },
    { id: 3, first_name: "Demetris", email: "dkilshall2@elpais.com", date_of_birth: "2018/12/31" },
    { id: 4, first_name: "Amata", email: "abraiden3@canalblog.com", date_of_birth: "2012/05/23" },
    { id: 5, first_name: "Venita", email: "vheap4@clickbank.net", date_of_birth: "2020/10/04" },
    { id: 6, first_name: "Fairfax", email: "fcrichton5@merriam-webster.com", date_of_birth: "2009/12/23" },
    { id: 7, first_name: "Kathleen", email: "kvasyukhnov6@devhub.com", date_of_birth: "2010/12/20" },
    { id: 8, first_name: "Sam", email: "scorck7@sitemeter.com", date_of_birth: "2020/08/30" },
    { id: 9, first_name: "Virgilio", email: "vferandez8@e-recht24.de", date_of_birth: "2000/09/07" },
    { id: 10, first_name: "Townie", email: "tpetyt9@upenn.edu", date_of_birth: "2018/09/01" }
  ];
  
  // 1: filterByName function
  function filterByName(name) {
    return users.filter(user => user.first_name.toLowerCase().includes(name.toLowerCase()));
  }
  
  // 2: Map to return emails
  const emails = users.map(user => user.email);
  
  // 3: Sort the array by date_of_birth in descending order
  const sortedUsers = users.sort((a, b) => new Date(b.date_of_birth) - new Date(a.date_of_birth));
  
  // 4: getById function
  function getById(id) {
    return users.find(user => user.id === id);
  }
  
  // Output results for each task
  console.log("Filtered by Name (Nicki):", filterByName("Nicki"));
  console.log("Array of Emails:", emails);
  console.log("Sorted by Date of Birth (Descending):", sortedUsers);
  console.log("Get User by ID (5):", getById(5));
  
//In JavaScript, a mutating method changes the original underlying array or object, whereas a non-mutating method creates a new array or object, leaving the original one unchanged.

//Mutating Methods: push, pop, sort
// Non-Mutating Methods: filter, find, map