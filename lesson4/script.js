// Vazifa : berilgan gapda nechta gap, nechta so'z, nechta belgi borligini topish kerek

let comment = prompt("leave comment")
let words = comment.split(" ").length
let char = comment.split("").length
let HowManySentence = new RegExp("[.,!?]", "g")
let sentence = comment.split(HowManySentence).length - 1

alert(`Bu matnda : \n- ${words} ta so'z \n- ${char} ta belgi \n- ${sentence} ta gap berilgan`)