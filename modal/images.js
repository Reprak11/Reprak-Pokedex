    // Pokemon Images
export function images(poke,allPokes){
    const imageFront = document.createElement("img")
    imageFront.src=allPokes[poke]["data"]["sprites"]["front_default"]
    const imageShiny = document.createElement("img")
    imageShiny.src=allPokes[poke]["data"]["sprites"]["front_shiny"]
    const image = document.createElement("div")
    image.appendChild(imageFront)
    image.appendChild(imageShiny)
    image.classList="flex"
    return image
}