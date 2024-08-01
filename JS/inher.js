// class Father{
//     drive(){
//         console.log("He can drive");
//     }
// }
// class Child extends Father{
//     programmer(){
//         console.log("He can code");
//     }
// }

// mahesh=new Father();
// mahesh.drive();

// alan=new Child()
// alan.drive()
// alan.programmer()

//-------------------------------

//super constructor

// class Bike{
//     constructor(){
//         this.company="Honda";
//     }
// }
// class Vehicle extends Bike{
//     constructor(name,price){
//         super();
//         this.name=name;
//         this.price=price;
//     }

// }
// v=new Vehicle("Shine",100000);
// document.writeln(`${v.company} ${v.name} ${v.price}`)
//--------------------------------

//Multilevel Inheritance

// class A{
//     asd(){
//         console.log("This is class A");
//     }
// }
// class B extends A{
//     bsd(){
//         console.log("This is class B");
//     }
// }
// class C extends B{
//     csd(){
//         console.log("This is class C");
//     }
// }
// c= new C()
// b=new B();
// c.asd();
// c.bsd();
// c.csd();
// b.asd()
//----------------------------------------
//Hierarchial inheritance

class A{
    asd(){
        console.log("This is class A");
    }
}
class B extends A{
    bsd(){
        console.log("This is class B");
    }
}
class C extends A{
    csd(){
        console.log("This is class C");
    }
}

bl=new B();
cl=new C();
bl.asd();
bl.bsd()
cl.asd();
cl.csd();