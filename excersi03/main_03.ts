let personName = "Atique ur rehman"
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetter: string = personName.slice(1).toLowerCase();
let titleCase = firstLetter + restLetter
console.log(titleCase);



