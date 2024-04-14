var gustlist = ["Umer", "Ali", "Maaz", "Rehan"];
var dontcome = gustlist[0];
console.log(dontcome, "you are not come");
gustlist.splice(0, 1, "Noor");
console.log("Good News ! We have Found a Bigger Table For Dinner.");
gustlist.unshift("Azeem");
gustlist.push("Hassan");
var middleIndex = Math.floor(gustlist.length / 2);
gustlist.splice(middleIndex, 0, "Rohan");
console.log("Updated List of our Guests");
gustlist.forEach(function (oneguests) { return console.log("Salam ".concat(oneguests, ", would you like to dinner with me")); });
console.log("unfortunataly. the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
while (gustlist.length > 2) {
    var removedguest = gustlist.pop();
    console.log("Sorry, ".concat(removedguest, " i can't invite you to dinner"));
}
console.log("invitations to the last 2 guest");
gustlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
gustlist.pop();
gustlist.pop();
console.log("Empty List", gustlist);
