var myTrans = ["Car", "Bike", "Bus", "Train"];
// 1st methode (loop)
// for(let i = 0; i < myTrans.length; i++){
//     console.log('I would like to own a ' +myTrans[i]);
// }
// 2nd method 
myTrans.map(function (ib) { return (console.log('I would like to own a ' + ib)); });
