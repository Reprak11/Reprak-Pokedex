import {Components} from './components.js';
import {getMyPokes} from './getAPI.js'
import {pokeModal} from './modal/modal.js'

//Components of the DOM
const components = Components()

// Add a page of Pokemon to the DOM
const printPokes = (value) =>{
    while (components["myPokeGroup"].firstChild) {
        components["myPokeGroup"].removeChild(components["myPokeGroup"].lastChild);
    }
    for(let i=0+15*value;i<15+15*value;i++){
        const poke = allPokes[i].data
        
        //Create Pokemon Title
        const name = document.createElement("h2")
        name.textContent=poke.name
        name.className="text-3xl capitalize"
    
        //Create Pokemon image
        const image = document.createElement("img")
        image.src=poke["sprites"]["versions"]["generation-vi"]["omegaruby-alphasapphire"]["front_default"]
        image.className="w-32 h-32 object-cover"

        //Create Info Button
        const button = document.createElement("button")
        button.textContent="Info"
        button.className="rounded-md text-2xl font-semibold w-20 bg-red-600 text-yellow-300 focus:outline-none"
        button.addEventListener("click", () => pokeModal(i,allPokes))

        //Create Pokemon card
        const d=document.createElement("div")
        d.appendChild(name)
        d.appendChild(image)
        d.appendChild(button)
        d.className="w-72 h-56 ml-1/2 border flex flex-col items-center justify-center shadow-lg mt-3"

        //Add card to section
        components["myPokeGroup"].appendChild(d)
    }
}

let page = 0
//Button eventListener
const changePage = (direction) =>{
    if (direction == "left" && page > 0){
        page--
        printPokes(page)
    } else if (direction == "right" && page < 9){
        page++
        printPokes(page)
    }
}

let allPokes
//On windows load add the first page to the DOM
window.onload = (async ()=>{
    allPokes = await getMyPokes(0)
    printPokes(page)
    components["myLeftArrow"].addEventListener('click', () =>changePage("left"))
    components["myRightArrow"].addEventListener('click',() => changePage("right"))
    components["myLeftArrow2"].addEventListener('click', () =>changePage("left"))
    components["myRightArrow2"].addEventListener('click',() => changePage("right"))
})
