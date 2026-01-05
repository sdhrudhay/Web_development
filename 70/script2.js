function getRandomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
}
let boxes = document.querySelectorAll(".box")
console.log(boxes)
boxes.forEach(value => {
    value.style.backgroundColor = getRandomColor();
    value.style.color = getRandomColor();
})