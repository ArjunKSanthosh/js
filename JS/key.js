// function keyEvent(e){
//     console.log(e.value);
// }
//

//event

// document.getElementById("click").addEventListener('click',()=>{
// let d1=+document.getElementById("nam1").value;
// let d2=+document.getElementById("nam2").value;
// const sum=document.getElementById("data").textContent=`${d1+d2}`
// console.log(sum);
// })


//MATH FUNCIONS
// console.log(Math.sqrt(9));
// console.log(Math.round(10.5));
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.7));
// console.log(Math.abs((-3)));
// console.log(Math.max(10,20,3,400,503,2,));
// console.log(Math.min(10,20,3,400,503,2,));
// console.log(Math.pow(2,5));
// console.log(Math.random());

//synchrnous
// console.log("start");
// for(i=1;i<=100;i++){
//     console.log(i);
// }
// console.log("end");

//settimer

// console.log("start");
// setTimeout(()=>{
// for(i=1;i<=100;i++){
//      console.log(i);
//  }
// },5000)
// console.log("end");

// let i=1;
// let x=setInterval(()=>{
//     document.write(i);
//     if(i==10){
//         clearInterval(x);
//     }
//     i++;
// },1000);

let i=10;
let x=setInterval(()=>{
    document.getElementById('data').textContent=i;
    if(i==0){
        document.getElementById('data').textContent="start";
        clearInterval(x);
    }
    i--;
},1000);