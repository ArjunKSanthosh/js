function handleChange(e){
    console.log(e.value);
    data=e.value;
   regx=/^[2-5]\d{3}-\d{4}-\d{4}-\d{4}/
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
}