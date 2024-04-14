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


console.log("unfortunataly. the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

while(gustlist.length > 2){
    let removedguest =gustlist.pop();
    console.log(`Sorry, ${removedguest} i can't invite you to dinner`);
}

console.log("invitations to the last 2 guest");
gustlist.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));

gustlist.pop();
gustlist.pop();

console.log("Empty List", gustlist);