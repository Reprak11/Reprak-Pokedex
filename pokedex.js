//Components of the DOM
const components = {
    "myPokeGroup": document.getElementById("pokeGroup"),
    "myLeftArrow": document.getElementById("leftArrow"),
    "myRightArrow": document.getElementById("rightArrow"),
    "myLeftArrow2": document.getElementById("leftArrow2"),
    "myRightArrow2": document.getElementById("rightArrow2")
}

//Make the promise with PokeAPi
function getPoke(value) {
    try {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
    } catch (error) {
        console.error(error);
    }
}

function myPokeList(page){
    const pokeList = [];
    for(let i=1; i<=150; i++){
        pokeList.push(getPoke(i+15*page))
    }
    return pokeList
}

// Get all pokemon in the group
const getMyPokes = (page) =>{
    return Promise.all(myPokeList(page)).then(myPokes => myPokes)
}

// Add a page of Pokemon to the DOM
const printPokes = (value) =>{
    while (components["myPokeGroup"].firstChild) {
        components["myPokeGroup"].removeChild(components["myPokeGroup"].lastChild);
    }
    for(let i=0+15*value;i<15+15*value;i++){
        poke = allPokes[i].data
        
        //Create Pokemon Title
        const name = document.createElement("h2")
        name.textContent=poke.name
        name.className="text-3xl capitalize"
    
        //Create Pokemon image
        const image = document.createElement("img")
        image.src=poke["sprites"]["front_default"]
        image.className="w-32 h-32 object-cover"

        //Create Info Button
        const button = document.createElement("button")
        button.textContent="Info"
        button.className="rounded-md text-2xl font-semibold w-20 bg-red-600 text-yellow-300 focus:outline-none"
        button.addEventListener("click", () => pokeModal(i))

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

let justinBieber = 0
//Button eventListener
const changePage = (direction) =>{
    if (direction == "left" && justinBieber > 0){
        justinBieber--
        printPokes(justinBieber)
    } else if (direction == "right" && justinBieber < 9){
        justinBieber++
        printPokes(justinBieber)
    }
}

let allPokes
//On windows load add the first page to the DOM
window.onload = (async ()=>{
    allPokes = await getMyPokes(0)
    printPokes(justinBieber)
    components["myLeftArrow"].addEventListener('click', () =>changePage("left"))
    components["myRightArrow"].addEventListener('click',() => changePage("right"))
    components["myLeftArrow2"].addEventListener('click', () =>changePage("left"))
    components["myRightArrow2"].addEventListener('click',() => changePage("right"))
})

const pokeModal = (poke) => {
    const exit = document.createElement("button")
    exit.id ="exitButton"
    exit.addEventListener("click", closeModal)
    exit.textContent="X"
    
    const name = document.createElement("h2")
    name.textContent=allPokes[poke].data.name
    name.classList="capitalize"
    
    const image = document.createElement("img")
    image.src=allPokes[poke]["data"]["sprites"]["front_default"]

    const d=document.createElement("div")
    d.appendChild(exit)
    d.appendChild(name)
    d.appendChild(image)
    d.className="bg-white w-72 h-56 border flex flex-col items-center justify-center shadow-lg"

    const d2 = document.createElement("div")
    d2.id="background"
    d2.appendChild(d)
    d2.className = "fixed bg-opacity-50 bg-gray-800 top-0 w-full h-full flex items-center justify-center "
    d2.addEventListener("click",closeModal)
    //Add card to section
    document.body.appendChild(d2)
}

const closeModal = (e) => {
    if (e.target.id == "exitButton" || e.target.id == "background"){
        document.body.removeChild(document.body.lastChild)
    }
}