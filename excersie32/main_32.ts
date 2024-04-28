let currentusers = ["ali", "umer", "maaz", "rehan","noor"];

let newusers = ["azan", "ahsan", "ali", "noor", "yousuf"];

newusers.forEach(newoneuser =>{
    let ourcodition = currentusers.some(currentoneuser => currentoneuser.toLowerCase() === newoneuser.toLowerCase())

    if(ourcodition){
        console.log(`sorry ${newoneuser} is already taken`)
    }else{
        console.log(`this username ${newoneuser} is available`)
    }
})