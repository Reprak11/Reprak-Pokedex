    // Pokemon Images
export function images(poke,allPokes){
    const imageFront = document.createElement("img")
    imageFront.src=allPokes[poke]["data"]["sprites"]["front_default"]
    imageFront.className="w-28 lg:w-36 h-28  lg:h-36"
    const imageShiny = document.createElement("img")
    imageShiny.src=allPokes[poke]["data"]["sprites"]["front_shiny"]
    imageShiny.className="w-28 lg:w-36 h-28  lg:h-36"
    const image = document.createElement("div")
    image.appendChild(imageFront)
    image.appendChild(imageShiny)
    image.classList="flex lg:py-2"
    return image
}