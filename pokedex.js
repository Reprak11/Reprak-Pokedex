//Components of the DOM
const components = {
    "myPokeGroup": document.getElementById("pokeGroup"),
    "myLeftArrow": document.getElementById("leftArrow"),
    "myRightArrow": document.getElementById("rightArrow")
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
        let name = document.createElement("h2")
        name.textContent=poke.name
        name.className="text-3xl capitalize"
    
        //Create Pokemon image
        let image = document.createElement("img")
        image.src=poke["sprites"]["front_default"]
        image.className="w-32 h-32 object-cover"

        //Create Pokemon card
        let d=document.createElement("div")
        d.appendChild(name)
        d.appendChild(image)
        d.className="w-72 h-48 border flex flex-col items-center justify-center shadow-lg mt-3"

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
})


