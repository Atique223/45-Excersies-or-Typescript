const myTrans: string [] = ["Car", "Bike", "Bus", "Train"];

// 1st methode (loop)
for(let i = 0; i < myTrans.length; i++){
    console.log('I would like to own a ' +myTrans[i]);
}
    
// 2nd method 

myTrans.map((ib)=>(
    console.log('I would like to own a ' +ib)
))
