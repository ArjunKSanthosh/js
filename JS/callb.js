// function sendMessage(msg){
//     console.log(msg);
// }
// function getMessage(callback){
//     const msg="hai team"
//     callback(msg)
// }

// getMessage(sendMessage)

a=[
    {name:"alan",age:20,mark:30},
    {name:"amal",age:20,mark:31},
    {name:"avin",age:20,mark:32},
    {name:"vinu",age:20,mark:33},
]
// a.forEach((data)=>{
//     console.log(data.name);
// })

//-----------------------------

// const x=a.find((data)=>{
//     return data.name=="alan"
// })
// console.log(x);

//-----------------------------


// const x=a.filter((item)=>{
//     return item.mark>30
// })
// console.log(x);

//-----------------------------

// a.map((item)=>{
//     console.log(item.name);
// })
//-----------------------------
const val=a.reduce((total,item)=>{
    return total+item.mark
},0)
console.log(val);