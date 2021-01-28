// All Pokemon Types with their style
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
export function types(poke, allPokes){
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
    return typesDiv
}
