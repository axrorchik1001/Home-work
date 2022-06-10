let liElement = document.querySelectorAll("li")

liElement.forEach(function(el){
    el.addEventListener("click", function(){
        liElement.forEach(function(e){
            e.classList = ""
        })
        el.classList.add("active")
        
    })
})