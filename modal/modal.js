import {types} from './pokeTypes.js'
import {exitButton} from './exitButton.js'
import {name} from './name.js'
import {images} from './images.js'
import {abilities} from './abilities.js'

export function pokeModal(poke, allPokes){
    //Modal Box
    const d=document.createElement("div")
    d.appendChild(exitButton())
    d.appendChild(name(poke,allPokes))
    d.appendChild(images(poke,allPokes))
    d.appendChild(types(poke,allPokes))
    d.appendChild(abilities(poke,allPokes))
    d.className="bg-white w-72 h-96 border flex flex-col items-center shadow-2xl rounded-md"

    //Modal Background
    const d2 = document.createElement("div")
    d2.id="background"
    d2.appendChild(d)
    d2.className = "fixed bg-opacity-50 bg-gray-800 top-0 w-full h-full flex items-center justify-center "
    d2.addEventListener("click",closeModal)
    //Add card to section
    document.body.appendChild(d2)
}

export function closeModal(e){
    if (e.target.id == "background"){
        try {
            document.getElementById("background").remove()
        } catch (error) {
            
        }
    }
}