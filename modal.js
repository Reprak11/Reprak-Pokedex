const pokeTypes = {
    "normal": "bg-gray-300",
    "fighting": "bg-yellow-900",
    "flying": "bg-blue-200",
    "poison": "bg-purple-800",
    "ground": "bg-yellow-600",
    "rock": "bg-yellow-800",
    "bug": "bg-green-300",
    "ghost": "bg-indigo-800",
    "steel": "bg-gray-400",
    "fire": "bg-red-600",
    "water": "bg-blue-500",
    "grass": "bg-green-500",
    "electric": "bg-yellow-300",
    "psychic": "bg-pink-500",
    "ice": "bg-blue-300",
    "dragon": "bg-indigo-600",
    "dark": "bg-gray-700",
    "fairy": "bg-pink-200",
    "shadow": "bg-gray-800"
}


export function pokeModal(poke, allPokes){
    // Modal Exit Button
    const exit = document.createElement("button")
    exit.id ="exitButton"
    exit.addEventListener("click", closeModal)
    exit.textContent="X"
    exit.classList="w-10 h-10 text-xl"
    const divExit = document.createElement("div")
    divExit.appendChild(exit)
    divExit.classList="w-full flex justify-end pr-2" 
    
    // Pokemon Name
    const name = document.createElement("h2")
    name.textContent=`#${allPokes[poke].data.id}-${allPokes[poke].data.name} `
    name.classList="capitalize text-2xl"
    
    // Pokemon Images
    const imageFront = document.createElement("img")
    imageFront.src=allPokes[poke]["data"]["sprites"]["front_default"]
    const imageShiny = document.createElement("img")
    imageShiny.src=allPokes[poke]["data"]["sprites"]["front_shiny"]
    const image = document.createElement("div")
    image.appendChild(imageFront)
    image.appendChild(imageShiny)
    image.classList="flex"

    //Pokemon Types
    const typesText = document.createElement("h2")
    typesText.textContent="Types"
    typesText.className = "font-medium font-bold"
    const typesDiv = document.createElement("div")
    typesDiv.appendChild(typesText)
    const myPokeTypes=allPokes[poke]["data"]["types"].map(x => x["type"]["name"])
    const typeList = document.createElement("div")
    myPokeTypes.forEach(e =>{
        const temp = document.createElement("h2")
        temp.textContent=e.toUpperCase()
        temp.className=`${pokeTypes[e]} text-white px-2.5 py-0.5 font-medium rounded-full border-2 border-gray-500`
        typeList.appendChild(temp)
    })
    typeList.className="flex w-full justify-around pt-1"
    typesDiv.appendChild(typeList)
    typesDiv.className="w-4/6 flex flex-col items-center"

    //Pokemon Abilities
    const abilitiesTitle = document.createElement("h2")
    abilitiesTitle.textContent="Abilities"
    abilitiesTitle.className="font-bold"
    const abilitiesDiv = document.createElement("div")
    abilitiesDiv.className="flex flex-col items-center"
    abilitiesDiv.appendChild(abilitiesTitle)
    const abilitiesList=(allPokes[poke]["data"]["abilities"].map(x => x["ability"]["name"]))
    abilitiesList.forEach(e =>{
        const temp = document.createElement("h2")
        temp.textContent=e
        temp.className="capitalize"
        abilitiesDiv.appendChild(temp)
    })
    
    //Pokemon weight and height
    const weightTitle = document.createElement('h2')
    weightTitle.textContent="Weight"
    weightTitle.className="font-bold"
    const weightValue = document.createElement('h2')
    weightValue.textContent = allPokes[poke]["data"]["weight"]
    const heightTitle = document.createElement('h2')
    heightTitle.textContent="Height"
    heightTitle.className="font-bold"
    const heightValue = document.createElement('h2')
    heightValue.textContent = allPokes[poke]["data"]["height"]
    const weightHeightDiv = document.createElement('div')
    weightHeightDiv.appendChild(weightTitle)
    weightHeightDiv.appendChild(weightValue)
    weightHeightDiv.appendChild(heightTitle)
    weightHeightDiv.appendChild(heightValue)
    weightHeightDiv.classList="flex flex-col items-center"

    const abilitiesWH = document.createElement('div')
    abilitiesWH.appendChild(abilitiesDiv)
    abilitiesWH.appendChild(weightHeightDiv)
    abilitiesWH.className="flex w-4/5 justify-around pt-4"

    //Modal Box
    const d=document.createElement("div")
    d.appendChild(divExit)
    d.appendChild(name)
    d.appendChild(image)
    d.appendChild(typesDiv)
    d.appendChild(abilitiesWH)
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
    if (e.target.id == "exitButton" || e.target.id == "background"){
        try {
            document.getElementById("background").remove()
        } catch (error) {
            
        }
    }
}