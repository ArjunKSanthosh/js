class Mark{
    constructor(m1,m2,m3){
        this.mar1=m1;
        this.mar2=m2;
        this.mar3=m3;
        this.mark=document.createElement("div")
        this.mark.textContent=`Marks::::Physics:${m1}:::Chemisry:${m2}:::English${m3}`
        document.body.appendChild(this.mark);
    }
    total(){
        let cgpa=(this.mar1+this.mar2+this.mar3)/30;
        this.mark3=document.createElement("h2")
        this.mark3.textContent=`cgpa::${cgpa}`
        document.body.appendChild(this.mark3);
    }
}
let mark=new Mark(20,30,40)
mark.total();