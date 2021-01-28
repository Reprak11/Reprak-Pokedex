// Pokemon Name
export function name(poke, allPokes){
    const name = document.createElement("h2")
    name.textContent=`#${allPokes[poke].data.id}-${allPokes[poke].data.name} `
    name.classList="capitalize text-2xl"
    return name
}
