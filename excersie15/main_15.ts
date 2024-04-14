/*
  You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
  You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/

const gust_list: string [] = ["Ali", "Umer", "Maaz", "Rehan"];
let dontcome = gust_list[1];

console.log(dontcome, "you are not come on my dinner");

gust_list.splice(1, 1, "Noor");

gust_list.forEach(gust_list => console.log(`Salam ${gust_list}, would you like to dinner with me?`));




