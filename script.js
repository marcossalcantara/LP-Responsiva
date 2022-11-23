function menuDrop(){
    let menu = document.querySelector(".responsive-nav")
    let icone = document.querySelector("#iconbutton")
    if (menu.style.display == "flex"){
        menu.style.display = "none"
        icone.src = "./assets/openicon.svg"
    }
    else{
        menu.style.display = "flex"
        icone.src = "./assets/closeicon.svg"
    }
    
}