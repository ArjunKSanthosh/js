// console.log("start");
// try {
    
// num=1;
// num.toPrecision(500);
// } catch (error) {
//     console.log("argument must be between 1 and 100");
// }
// finally{
//     console.log("done");
// }
// console.log("end");
//--------------------------------------------------------------


//callback hell
function orderFood(callback){
    setTimeout(()=>{
        console.log("food ordered");
        callback();
    },3000);
}
function decorateVenue(callback){
    setTimeout(()=>{
        console.log("venue decorated");
        callback();
    },3000);
}
function arrangeDJ(callback){
    setTimeout(()=>{
        console.log("DJ arrranged");
        callback();
    },3000);
}
orderFood(()=>{
    decorateVenue(()=>{
        arrangeDJ(()=>{
            console.log("All programs completed");
        })
    })
})