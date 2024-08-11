let index = 0;
function colorChange(){
    const colors = ["red", "blue", "orange", "yellow", "green", "purple"];

    // document.getElementById("one").style.background = colors[index++];
    document.getElementsByClassName("container")[0].style.background = colors[index++];
    if(index > colors.length-1){
        index = 0;
    }
}