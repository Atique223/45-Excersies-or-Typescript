var userNames = ["sarib", "azmeer", "huzaifa", "Admin", "taha"];
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("hello ".concat(oneuser, ",would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ",thank you for logging in again."));
    }
});
