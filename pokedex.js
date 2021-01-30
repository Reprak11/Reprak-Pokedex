import {Components} from './components.js';
import {getMyPokes} from './getAPI.js'
import {pokeModal} from './modal/modal.js'

//Components of the DOM
const components = Components()

//Add a single Pokemon Card
const addCard = (i, pokeGroup) =>{
    const poke = pokeGroup[i].data

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
    button.textContent="INFO"
    button.className="text-2xl font-semibold w-40 bg-red-500 hover:bg-red-600 text-white rounded focus:outline-none"
    button.addEventListener("click", () => pokeModal(i,pokeGroup))

    //Create Pokemon card
    const d=document.createElement("div")
    d.appendChild(name)
    d.appendChild(image)
    d.appendChild(button)
    d.className="w-72 h-56 lg:h-60 lg:pt-3 ml-1/2 border rounded flex flex-col items-center justify-center shadow-lg mt-3"

    //Add card to section
    components["myPokeGroup"].appendChild(d)
}

// Add a page of Pokemon to the DOM
const printPokes = (value) =>{
    while (components["myPokeGroup"].firstChild) {
        components["myPokeGroup"].removeChild(components["myPokeGroup"].lastChild);
    }
    for(let i=0+15*value;i<15+15*value;i++){
        addCard(i,allPokes)
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
    components["mysearchPoke"].addEventListener('input',(e) => inputSearch(allPokes,e.target.value))
})

const inputSearch = (allPokes, myText) =>{
    if (myText == ''){
        components["myTopArrows"].classList.remove("hidden")
        components["myBottomArrows"].classList.remove("hidden")
        printPokes(page)
    } else{
        components["myTopArrows"].classList.add("hidden")
        components["myBottomArrows"].classList.add("hidden")
        while (components["myPokeGroup"].firstChild) {
            components["myPokeGroup"].removeChild(components["myPokeGroup"].lastChild);
        }
        const myLocalList = (allPokes.filter(poke => poke["data"]["name"].startsWith(myText.toLowerCase())))
        for (let i=0;i<myLocalList.length;i++){
            addCard(i,myLocalList)
        }
    }
}