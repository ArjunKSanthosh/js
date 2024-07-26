a=[];
flag=0;
function clickMe(){
     val=document.getElementById("inp").value
    ar=val.split("");
    console.log(ar);
    for(i=0;i<ar.length;i++){
        if(ar[i]=='a' || ar[i]=='e' ||ar[i]=='i' ||ar[i]=='o'||ar[i]=='u'){
            flag++
        }
    }
    document.getElementById("t").textContent=`Number of vowels is ${flag}`

}