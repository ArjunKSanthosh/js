let a=1;
do{
 if(a%2==0){
   console.log(a);
 }
 a++;
}
while(a<=10);

let i=1;
while(i<=10){
    console.log(i);
    i++;
}

for(let i=0;i<=10;i++){
    if(i%2==1)
        {
        console.log("odd numbers are" +i);
    }
}

let b=0;
let c=1;
let d;
console.log(b);
console.log(c);
for(let i=0;i<=10;i++){
 d=b;
 b=c;
 c=d+b;
 console.log(c);
}