let backgroundcolor = ["red","green","yellow","orange","blue"];
let color = ["white","black","white","pink","purple"];
let boxes = document.querySelectorAll(".box");
console.log(boxes);
// for(let i=0;i<boxes.length; i++){
//     let r = Math.floor((Math.random()*10)%5)
//     console.log(r)
//     boxes[i].style.color = color[r]
//     boxes[i].style.backgroundColor = backgroundcolor[r]
// }
boxes.forEach(value => {
    let r = Math.floor((Math.random()*10)%5)
    console.log(r)
    value.style.color = color[r]
    value.style.backgroundColor = backgroundcolor[r]
});