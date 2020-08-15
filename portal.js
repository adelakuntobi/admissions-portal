
document.getElementById("vbutton").addEventListener("click",viewMore);


function viewMore () {
    var hide=document.getElementById("viewmore");
    if(hide.style.display==="none") {
        hide.style.display="block"
        document.getElementById("vbutton").innerHTML="View Less"
    }

    else{
        hide.style.display="none"
        document.getElementById("vbutton").innerHTML="View More"
    }


}




