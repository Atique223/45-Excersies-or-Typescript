let countriestovisit: string[] = ["Pakistan", "China", "Brazil", "Argentina"];
console.log("Orignial order:", countriestovisit);

console.log("Alphabetical Oder:",[...countriestovisit].sort());

console.log("Still in original Oder:",countriestovisit);

console.log("Reverse Oder:", [...countriestovisit].reverse());

console.log("Still in original Oder:",countriestovisit);

console.log("Original Array Reversed:", countriestovisit.reverse());

console.log("Back to Original Oder:", countriestovisit.reverse());

console.log("Sorted in Alphabetical Oder:", countriestovisit.sort());

console.log("Original Array Reversed Again:", countriestovisit.reverse());
