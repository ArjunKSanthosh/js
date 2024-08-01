let a=[];
function clickMe(){
    a.push(document.getElementById("inp").value);
    display();
}
function display(){
    const data=document.createElement("h2");
    a.map((item)=>{
        data.innerHTML=`${item} <button onclick='delet("${item}")'>Delete</button>`;
    })
    document.getElementById("dd").appendChild(data);

}  
function delet(d){
    document.getElementById("re").textContent="After deleting"
    a.splice(a.indexOf(d),1);
    displays();
} 
function displays(){
    a.map((item1)=>{
        const data1=document.createElement("li");
        data1.innerHTML=`${item1}`
        document.getElementById("re").appendChild(data1)
    })
  
}
