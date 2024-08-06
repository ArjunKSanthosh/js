// const regx=/^[6-9]\d{9}$/
// console.log(regx.test("6345434990"));
// console.log(regx.test("bat east fishes"));
// console.log(regx.test("rat east fishes"));


const regx=/^([012]\d||3[0-1])-([0]\d||1[0-2])-(\d{4})/
console.log(regx.test("25-04-2020"));
console.log(regx.test("bat east fishes"));
console.log(regx.test("rat east fishes"));
