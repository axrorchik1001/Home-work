let date = new Date();

let week = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let secund = date.getSeconds();
let AmPm;
let weekDay;

switch (week) {
    case 1:
        weekDay ="Dushanba"
        break;
    case 2:
        weekDay ="Seshanba"
        break;
    case 3:
        weekDay ="Chorshanba"
        break;
    case 4:
        weekDay ="Payshanba"
        break;
    case 5:
        "Juma"
        break;
    case 6: 
    weekDay ="Shanba"
        break;
    case 7:
        weekDay ="Yakshanba"
        break;

    default:
        weekDay ="Adashdingiz"
        break;
}

if(hour < 12){
    AmPm = "Am";
}else{
    AmPm = "Pm";
}

alert(`Today is : ${weekDay}\nCurrent time : ${hour} ${AmPm} : ${minute} : ${secund}`);