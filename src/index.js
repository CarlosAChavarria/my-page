// tesis
let once = true;

document.querySelectorAll(".modal-container img").forEach(element => {
    element.addEventListener("click", function(e){
        e.stopPropagation();
        if(once){
            this.parentNode.classList.add("active");
            once = false;
        }        
    })
})

document.querySelectorAll(".modal-container").forEach(element => {
    element.addEventListener("click", function(e){
        if(once == false){
            this.classList.remove("active");
            once = true;
        }
    })
})