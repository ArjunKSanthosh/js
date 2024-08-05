function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<div class="card">
            <h3>${dt.id}</h3>
            <h3>${dt.name}</h3>
            <h3>${dt.email}</h3>
            <p>${dt.body}</p>
        </div>`
        })
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{
        console.log(error);
    })
}
