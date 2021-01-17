//Components of the DOM
const components = {
    "myPokeGroup": document.getElementById("pokeGroup")
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
    for(let i=1; i<15; i++){
        pokeList.push(getPoke(i+15*page))
    }
    return pokeList
}

// Get all pokemon in the group
const getMyPokes = async (page) =>{
    axios.all(myPokeList(page)).then(myPokes => 
        myPokes.forEach( poke =>{
        poke = poke.data
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
        )
    )
}

window.onload = (()=>{
    getMyPokes(0)
})

