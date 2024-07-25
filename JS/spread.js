//BEFORE SPREAD OPERATOR
// a=[1,2,3,4,5,6]
// b=a
// b[0]=5

//spread operator in array
// a=[1,2,3,4,5,6]
// b=[...a]
// b[0]=5
// console.log(`from a=${a}`);
// console.log(`from b=${b}`);

//spread operator in object
// a={name:"alan",age:20}
// b={...a}
// b.name="avin"
// b.age=21
// console.log(a);
// console.log(b);

//object destructure
// stud={name:"alan",age:20,mark:20}
// const{name,age,mark}=stud
// console.log(name,age,mark);

//array destructure
// s=[1,2,3,4,5]
// const[a,b,c,d,e]=s
// console.log(a,b,c,d,e)

//nested object destucture
// stud={name:"alan",age:20,mark:{che:20,phy:30,math:40}}
// const{name,age,mark:{che,phy,math}}=stud
// console.log(name,age,che,phy,math);

//nested array destructure
x=[{che:20,phy:30,math:40},6,7,8,9]
const[{che,phy,math},a,b,c,d]=x
console.log(che,phy,math,a,b,c,d);

