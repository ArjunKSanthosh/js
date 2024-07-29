// console.log(this);

// function getName(){
//     console.log(this);
// }
// getName()

// ---------------------------------------

// const person={
//     name:"synnefo",
//     location:"Kochi",
//     getName(){
//         console.log(this.name);
//         console.log(this.location);
//     }
// };
// person.getName()

// --------------------------------------

function getName(a,b,c){
    // console.log(a,b,c);
    console.log(this.name);
    console.log(this.location);
}
const person1={
    name:"synnefo",
    location:"kochi",
};
const person2={
    name:"novavi",
    location:"kochi",
};
// getName.call(person1,"1","2","3");
// getName.apply(person1,[1,2,3]);

// const newname=getName.bind(person2);
// const newName=getName.bind(person1);
// newName();
// newname();

// const person={
//     name:"Novavi",
//     location:"kochi",
//     method(){
//         return function getname(){
//             return this;
//         }
//     }
// };
// x=person.method();
// console.log(x());