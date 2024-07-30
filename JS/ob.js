// class Animal{
//     leg;
//     teeth;
//     constructor(leg,tee){
//         console.log(this.leg=leg);      
//         console.log(this.teeth=tee);                                              
//     }
//     // nonVeg(){
//     //     console.log("Animals eat meat");
//     // }
//     hunt(){
//         console.log("Animal hunts using thier"+this.leg+"legs");
//     }
//     veg(){
//         console.log("Animals eat plants");
//     }
// }
// let dog =new Animal(4,"Sharp");
// // console.log(dog.leg,dog.teeth);
// // dog.nonVeg()
// dog.hunt();


class Button{
    constructor(name){
        this.button=document.createElement("button");
        this.button.textContent=name;
        document.body.appendChild(this.button);
    }
    setColor(clr,clr1){
        this.button.style.backgroundColor=clr;
        this.button.style.color=clr1


    }
    set width(width){
        this.button.style.width=width+"px";
        // this.button.style.backgroundColor=red

    }
    set height(height){
        this.button.style.height=height+"px";
    }
    get width(){
        return parseInt(this.button.style.width);
    }
    get height(){
        return parseInt(this.button.style.height);

    }
}
let bt1=new Button("Click me")
bt1.width=100;
bt1.height=50;
bt1.setColor("red","white")
console.log(bt1.width,bt1.height);