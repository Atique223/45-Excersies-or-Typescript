let usernames = ["ali", "maaz", "umer", "admin", "rehan"];

usernames = []

if(usernames.length === 0){
   console.log("your array in empty we need to find some users!")
}else{
    usernames.forEach(oneuser =>{
        if(oneuser === "admin"){
            console.log(`hello ${oneuser},would you like to see a status report?`)
        }else{
            console.log(`hello ${oneuser},thank you for logging in again.`)
        }
    })
}