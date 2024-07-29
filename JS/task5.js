std1={
    name:"Alan",
    class:"10",
    mark:"20"
}
std2={
    name:"Ranga",
    class:"10",
    mark:"20"
}
std3={
    name:"Niroop",
    class:"10",
    mark:"20"
}
std4={
    name:"Sinu",
    class:"10",
    mark:"20"
}
std5={
    name:"Avin",
    class:"10",
    mark:"20"
}
function getMark(){
    console.log(`${this.name} of class ${this.class} has scored ${this.mark}`);
}
getMark.call(std1)
getMark.call(std2)
getMark.call(std3)
getMark.call(std4)
getMark.call(std5)

