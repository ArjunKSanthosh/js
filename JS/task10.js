function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<div class="card">
            <h3>ALBUM ID:${dt.albumId}</h3>
            <h3>ID:${dt.id}</h3>
            <h3>TITLE:${dt.title}</h3>
            <div class="main">
            <div class="m1">
                <img src="${dt.url}" alt="">
            </div>
            <div class="m2">
                <img src="${dt.thumbnailUrl}" alt="">
            </div>
            </div>
            
            
        </div>`
        })
        document.getElementById("list").innerHTML=str
    })
    .catch((error)=>{
        console.log(error);
    })
}
