function putZero(time){
    return time<10?"0"+time:time;
}

function  timer(){
    let date= new Date();

    let hours= date.getHours();
    ampm=hours<12?"am":"pm";
    if(hours<18 && hours>6){
        document.getElementById("head").style.backgroundImage='url(./images/field.jpg)'
        document.getElementById("head").style.backgroundSize='cover'
        document.getElementById("timer").style.textAlign='center'
        document.getElementById("head").style.backgroundColor= 'rgb(255, 123, 0,0.6);'
        
    }
    else{
        document.getElementById("head").style.backgroundImage='url(./images/moon.jpg)'
        document.getElementById("head").style.backgroundSize='cover'
        document.getElementById("timer").style.textAlign='center'
        document.getElementById("head").style.backgroundColor= 'rgba(9, 174, 224, 0.6);'

    }


    document.getElementById("timer").textContent=`${putZero(hours%12)}:${putZero(date.getMinutes())} :${putZero(date.getSeconds())} ${ampm}`


    setTimeout(() => {
        timer();
    }, 1000);
}

timer();