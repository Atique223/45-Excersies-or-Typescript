/*
If you could invite anyone,living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to din
*/
var gust_list = ["Ali", "Umer", "Maaz", "Rehan"];
gust_list.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, ", would you like to dinner with me")); });
