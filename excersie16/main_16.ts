let gustlist = ["Umer", "Ali", "Maaz", "Rehan"];

let dontcome = gustlist[0];

console.log(dontcome, "you are not come");

gustlist.splice(0, 1, "Noor");

console.log("Good News ! We have Found a Bigger Table For Dinner.");

gustlist.unshift("Azeem");

gustlist.push("Hassan");

let middleIndex: number = Math.floor(gustlist.length / 2);

gustlist.splice(middleIndex, 0, "Rohan");


console.log("Updated List of our Guests");

gustlist.forEach(oneguests => console.log(`Salam ${oneguests}, would you like to dinner with me`));
