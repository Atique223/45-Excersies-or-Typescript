var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestovisit = ["Pakistan", "China", "Brazil", "Argentina"];
console.log("Orignial order:", countriestovisit);
console.log("Alphabetical Oder:", __spreadArray([], countriestovisit, true).sort());
console.log("Still in original Oder:", countriestovisit);
console.log("Reverse Oder:", __spreadArray([], countriestovisit, true).reverse());
console.log("Still in original Oder:", countriestovisit);
console.log("Original Array Reversed:", countriestovisit.reverse());
console.log("Back to Original Oder:", countriestovisit.reverse());
console.log("Sorted in Alphabetical Oder:", countriestovisit.sort());
console.log("Original Array Reversed Again:", countriestovisit.reverse());
