let summ = prompt("Qancha summ pulingiz bor ")*1

alert("sizning xarajatlaringiz : \nBorish-kelish samolyot bileti - $500\n Mehmonxona to’lovi - $250\nMuzey va ko’ngilochar joylar uchun - 120 yevro")

let summBilet = 500*9433
let summMexmonxona = 250*9433
let summMuzey = 120*10354

if(summ > summBilet + summMexmonxona + summMuzey){
    console.log("Oq yo’l");
}else{
    console.log("ozgina sabr qilish kerek ekan");
}
