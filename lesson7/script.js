// work1
// Argument sifatida ikki a va b sonlarini qabul qiluvchi funksiya tuzilishi kerak.
// ▪️ Agar a soni b sonidan katta bo'lsa a ni b ga bo'lish
// ▪️ Aksincha bo'lsa ikkala raqamni ko'paytmasini hisoblash
// ▪️ Har ikkala holatda ham natijani qaytarish

// let func = function(a, b){
//     if(a>b){
//         console.log(a/b);
//     }else{
//         console.log(a*b);
//     }
// }   
// func(5,10)
// ----------------------------------------------------------------------

// work2
// Argument sifatida sonlardan iborat array qabul qiluvchi funksiya tuziladi
// ▪️ Agar arrayning biron elementni songa o'girib bo'lmaydigan type da bo'lsa Xatolik xaqida xabar berilishi kerak va 0 qaytarilishi kerak
// ▪️ Aksincha hamma elementlar raqam yoki raqamga o'girilsa, o'girish mumkin bo'lganlari raqamga o'girilib ularning o'rta arifmetigi yaxlitlanib hisoblanishi va qaytarilishi lozim

// function func(numbers){
//     let total = 0;
//     numbers.forEach(function(number){
//         number = Number(number)
//         total += number

//     })
//     return !total ? 0 : total/numbers.length
// }
// console.log(func([1, 2, 9, 8]))
// ------------------------------------------------------------------

// work3
// 🔸 Raqamlarni palindromligi tekshiriluvchi funksiya tuzish
// ▪️ Funksiya parametr sifatida bir son qabul qilib oladi, va o'sha sonning teskarisi o'ziga teng tengmasligini topadi
// ▪️ Teng bo'lgan holatda bu son pallindrom raqam deyiladi
// ▪️ PS:  argumentga -121 soni qabul qilinsa teskarisi 121- bo'ladi va u 121 ga teng emas deb topilishi kerak

// function palindrom(number){
//     let string = `  `
//     number =  `${number}`

//     for(let i = number.length -1; i >= 0; i--){
//         string += number[i]
//     }
//     return string

    
// }
// console.log(palindrom(-134))
// --------------------------------------------------------------------

// work4

// 🔸 Ikki argument qabul qiladigan funksiya tuziladi, birinchi argument sifatida sonlardan iborat array(nums), ikkinchi argument sifatida biron son(val).
// ▪️ nums arrayidagi har bir val elementi topiladi va shu element o'rniga _ belgisi qo'yilishi kerak va yangi array qaytarilishi lozim

// function func(numbers, val){
//     return numbers.map(function(number){
//         return number === val ? "_" : number
        
//     })
// }
// console.log(func([20, 15, 34, 27], 15))   
