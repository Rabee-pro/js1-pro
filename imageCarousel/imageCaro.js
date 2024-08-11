var index = 0;

showImg(index);
function showImg(i){
    index += i;

    var images = document.getElementsByClassName("imge");
    var dots = document.getElementsByClassName("dot");

    for(i=0; i<images.length; i++){
        images[i].style.diaplay = "none";
    }

    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    if(index > images.length - 1){
        index = 0;
    }
    if(index < 0){
        index = images.length - 1;
    }
    images[index].style.display = "block";
    dots[index].className +="active";

}