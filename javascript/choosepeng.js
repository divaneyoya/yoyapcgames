var allPeng = document.querySelectorAll("#choose-div img");
var yoyaPoints = parseInt(localStorage.getItem("yoya_points"));

for(let elt of allPeng){
    elt.addEventListener("click", ()=>{
        allPeng[0].title = "200000";
        allPeng[1].title = "350000";
        allPeng[2].title = "400000";
        allPeng[3].title = "3000000"; 
        //alert(elt.title);

        if(yoyaPoints < elt.title){
            alert("You can't buy this penguin right now because you don't have enough yoya points");
        }else{
            alert("These characters are still in development, but don't worry, your yoya points will be kept and we'll let you know when the characters are complete.");
            // let reste = yoyaPoints - elt.title;
            // localStorage.setItem("yoya_points", reste);
            // alert("Congratulations on your purchase");
        }
    })
}


setInterval(()=>{  

    let BodyWidth = document.querySelector("body").offsetWidth;
    let BodyHeight = document.querySelector("body").offsetHeight;
    let AllImg = document.querySelectorAll("body img");

    if(BodyWidth > BodyHeight){
        for(let img of AllImg){
           img.style["min-width"] = (BodyWidth/2.4)+'px';
           img.style["max-width"] = (BodyWidth/2.4)+'px';
           img.style["height"] = (img.offsetWidth/1.6)+'px';
        }
    }else{
         for(let img of AllImg){
             img.style["min-width"] = (BodyWidth/1.12)+'px';
             img.style["max-width"] = (BodyWidth/1.12)+'px';
             img.style["height"] = (img.offsetWidth/1.6)+'px';
         }
    }

},50)