a=[];
while (true) {
    choice=prompt("1 -> Add data \n2 -> Display data \n3 -> Edit data \n4 -> Delete data \n5 - > Exit \nEnter your choice\n");
    if (choice==1) {
        data=prompt("Add task");
        
        ar.push(data);
    }
    else if(choice==2){
        str=``
        for(i=0;i<ar.length;i++){
            str+=`[${i+1}]   ${a[i]} \n`    
        }
        alert(str)
    }
    else if(choice==3){
        str=``
        for(i=0;i<ar.length;i++){
            str+=`[${i+1}]   ${a[i]} \n`    
        }
        ind=prompt(str+"Enter option");
        inp=prompt("Enter the content");
        ar[ind-1]=inp;
        alert("suuccesfuly edited")
    }
    else if(choice==4){
        str=``
        for(i=0;i<ar.length;i++){
            str+=`[${i+1}]   ${ar[i]} \n`    
        }
        ded=prompt(str+"Enter option");
        ar.splice(ar.indexOf(ded-1),1);
    }
    else if(choice==5){
        break;
    }
    else{
        alert("Invalid Choice")
    }
}