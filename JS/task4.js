let a=[];
function clickMe(){
    a.push(document.getElementById("inp").value);
    display();
}
function display(){
    let str="";
    for(let i in a){
        str= `${a[i]}  `;
    }
    const data=document.createElement("li");
    data.textContent=str;
    document.getElementById("list").appendChild(data);
}
