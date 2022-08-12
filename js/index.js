let body = document.querySelector("body")

let element = document.createElement("h1")
element.innerText = "Some title for git"

body.insertAdjacentElement("afterbegin", element)