function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar light.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar dark.png")
  }
}
var menuItem = document.querySelectorAll(".item-menu")

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"))
  this.classList.add("ativo")
}

menuItem.forEach((item) => item.addEventListener("click", selectLink))

//Expandir o menu

var btnExp = document.querySelector("#btn-exp")
var menuSide = document.querySelector(".menu-lateral")

btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir")
})
function togglemenu(){
  const menumobile = document.getElementById("menu-mobile")
  
  if(menumobile.className === "menu-mobile-a"){
    menumobile.className = "menu-mobile"
  }else{
    menumobile.className = "menu-mobile-a"
  }
}
   