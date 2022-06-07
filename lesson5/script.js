let sorov = confirm("Siz son o'ylab topish oyiniga rozimisiz")
if(!sorov){
    window.location.href = "https://fulfiledu.uz"
}

let trys = 0
let random = Math.round(Math.random()*20)
let taxmin = prompt("20 gacha bo'lgan son toping")

if(!taxmin){
    alert("biron son oylamasangiz bolmaydi")
}

if(Number(taxmin) != taxmin){
    taxmin = prompt("son kiriting iltimos")
}


while(taxmin != random){
    if(taxmin > random){
        taxmin = prompt("siz katta son oyladiz")
        trys += 1
    }else if(taxmin < random){
        taxmin = prompt("siz kichik son oyladiz")
        trys += 1
    }
    
}

alert(`tabriklayiz  ${trys} ta urinishda yutdingiz`)