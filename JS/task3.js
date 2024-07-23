
function clickSum(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Sum =${val+vak}`
}
function clickSub(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Sub  =${val-vak}`
}
function clickDiv(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Div =${val/vak}`
}
function clickMul(){
    const val=parseInt(document.getElementById("num").value);
    const vak=parseInt(document.getElementById("num2").value);
    document.getElementById("data").textContent=`Mod =${val*vak}`
}