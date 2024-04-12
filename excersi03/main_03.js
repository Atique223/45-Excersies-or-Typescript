var personName = "Atique ur rehman";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
var firstLetter = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetter;
console.log(titleCase);
