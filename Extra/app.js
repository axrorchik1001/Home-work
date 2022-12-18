document.querySelector("body").addEventListener("mouseup", runEvent)

function runEvent(e){
    console.log("Event type is : ", e.type  )
}