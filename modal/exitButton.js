// Modal Exit Button
export function exitButton(){
    const exit = document.createElement("button")
    exit.id ="exitButton"
    exit.addEventListener("click", closeModal)
    exit.textContent="X"
    exit.classList="w-10 h-10 text-xl"
    const divExit = document.createElement("div")
    divExit.appendChild(exit)
    divExit.classList="w-full flex justify-end pr-2"
    return divExit 
}

function closeModal(e){
    if (e.target.id == "exitButton"){
        try {
            document.getElementById("background").remove()
        } catch (error) {
            
        }
    }
}