function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<div class="card">
            <h3>${dt.userId}</h3>
            <h3>${dt.id}</h3>
            <h3>${dt.title}</h3>
        </div>`
        })
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{
        console.log(error);
    })
}
