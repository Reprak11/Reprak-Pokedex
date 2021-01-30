
export function abilities(poke,allPokes){
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
    weightValue.textContent = `${allPokes[poke]["data"]["weight"]/10} kg`
    const heightTitle = document.createElement('h2')
    heightTitle.textContent="Height"
    heightTitle.className="font-bold"
    const heightValue = document.createElement('h2')
    heightValue.textContent = `${allPokes[poke]["data"]["height"]/10} m`
    const weightHeightDiv = document.createElement('div')
    weightHeightDiv.appendChild(weightTitle)
    weightHeightDiv.appendChild(weightValue)
    weightHeightDiv.appendChild(heightTitle)
    weightHeightDiv.appendChild(heightValue)
    weightHeightDiv.classList="flex flex-col items-center"

    // Abilities, weight and height div
    const abilitiesWH = document.createElement('div')
    abilitiesWH.appendChild(abilitiesDiv)
    abilitiesWH.appendChild(weightHeightDiv)
    abilitiesWH.className="flex w-4/5 justify-around pt-4"
    return abilitiesWH
}