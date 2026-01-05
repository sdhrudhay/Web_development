let button = document.getElementById("btn");
let box = document.getElementsByClassName("box")[0];
button.addEventListener("click", (e)=>{
    box.innerHTML = "Now I am changed dude";
    console.log(e['bubbles']);
})