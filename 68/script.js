console.log('Hello World')
// let boxes = document.getElementsByClassName("box")
// console.log(boxes[2])
// boxes[2].style.backgroundColor = "red"
// let bg_red = document.getElementById("bg-red")
// bg_red.style.backgroundColor = "red"
// let firstbox = document.querySelector(".box")
// firstbox.style.backgroundColor = 'green'
let allboxes = document.querySelectorAll(".box")
allboxes.forEach((value) => {
    value.style.backgroundColor='red'
})
console.log(allboxes)
console.log(allboxes[4].matches(".box"))
console.log(allboxes[3].closest(".container"))
console.log(allboxes[3].parentElement.contains(allboxes[5]))