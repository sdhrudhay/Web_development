let box = document.querySelector(".box")
let container = document.querySelector(".container")
box.innerText = "Hey I am hr"
console.log(box.hasAttribute("style"))
let div = document.createElement("div");
div.setAttribute("class","box")
div.setAttribute("style","color: red; background: blue;")
div.innerHTML = "<b>I have been added now</b>"
// container.before(div)
// container.insertAdjacentElement("beforeend",div)
// container.insertAdjacentHTML("afterbegin",'<i style="color: red; background: green"> I am new here and just inserted</i>')
// box.insertAdjacentText("afterbegin","Wass ip")
// box.replaceWith(div)
// box.classList.add("newhere")
// box.classList.remove("bg")
// box.removeAttribute("class","bg")
box.classList.toggle("red")