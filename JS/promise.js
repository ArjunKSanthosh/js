// //promise

// const fetchData=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(false){
//                 resolve("success")
//             }
//             else{
//                 reject("Error")
//             }
//         },2000)
//     });
// }
// fetchData().then((dt)=>{console.log(dt)}).catch((error)=>{console.log(error)})
//------------------------------------------------------------------------------------------------------------------------------------------

//promise chain

function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<div class="card">
            <h3>${dt.title}</h3>
            <p>${dt.body}</p>
        </div>`
        })
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{
        console.log(error);
    })
}

