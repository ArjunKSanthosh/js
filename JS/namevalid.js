function handleChange(e){
    console.log(e.value);
    data=e.value;
   regx=/^[a-zA-Z]{4}$/
   result=regx.test(data)
   console.log(result);
   if(result){
    document.getElementById("msg").innerHTML=`<span class="smsg">Success</span>
    `
   }
   else{
    document.getElementById("msg").innerHTML=`<span class="emsg">Error</span>
    `
   }
}//it is type of processs in which a function is imported from another file //it is type of processs in which a function is imported from another file 