let userNames = ["sarib","azmeer","huzaifa","Admin","taha"];

userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`hello ${oneuser},would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser},thank you for logging in again.`)
    }
})

