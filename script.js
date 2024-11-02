function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se tiver light mode , adicionar a imagem light
    // substituir a imagem
    img.setAttribute("src", "img/Avatar-light.png")
    img.setAttribute("alt", "uma Foto de terno preto ")
  } else {
    img.setAttribute("src", "img/avatar.png")
  }

  //se tiver sem light mode, manter a imagem normal
}
