let ulElement = document.querySelector("ul")
let links = ["Home", "About", "Contact", "Services"]

links.forEach(function(el){
    let liElement = document.createElement("li")
    liElement.textContent = el
    ulElement.appendChild(liElement)

    
})

let navLinks = document.querySelectorAll("li")

navLinks.forEach(function(link){
    link.addEventListener("click", function(){
            navLinks.forEach(function(e){
                e.classList = ""
            })
        link.classList.add("active")
        
    })
})