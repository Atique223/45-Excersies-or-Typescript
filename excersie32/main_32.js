var currentusers = ["ali", "umer", "maaz", "rehan", "noor"];
var newusers = ["azan", "ahsan", "ali", "noor", "yousuf"];
newusers.forEach(function (newoneuser) {
    var ourcodition = currentusers.some(function (currentoneuser) { return currentoneuser.toLowerCase() === newoneuser.toLowerCase(); });
    if (ourcodition) {
        console.log("sorry ".concat(newoneuser, " is already taken"));
    }
    else {
        console.log("this username ".concat(newoneuser, " is available"));
    }
});
