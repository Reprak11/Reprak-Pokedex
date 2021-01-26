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
export function getMyPokes(page) {
    return Promise.all(myPokeList(page)).then(myPokes => myPokes)
}