// // console.log(Math.floor(Math.random() * (3 - 2 + 1) + 2));

// // 1-topshiriq

// let ism = prompt("Assalamu aleykum iltomos ismingizni kiriting: ");
// let hozirgiYil = +prompt("Yozirgi yilni kiriting: ");
// let tugilganYil = +prompt("Tug`ilgan yilingizni kiriting: ");

// function str(a, b, c){
//     let yosh = b - c
//     let matn = `Assalomu aleykum ${a}, yoshingiz - ${yosh}da`
//     return matn
// }

// let funksiya = str(ism, hozirgiYil, tugilganYil);
// alert(funksiya)



// 2-topshiriq

let misolSoni = +prompt("NECHTA MISOL ISHLAMOQCHISIZ?")

for(i = 0; i < misolSoni; i++){
    misollar()
}

function sonlar(){
    return Math.floor(Math.random() * 10)
}

function misollar(){
    let son1 = sonlar()
    let son2 = sonlar()
    let tartibi = sonlar()

    if(tartibi == 1 || tartibi == 2){
        let task = son1 + " + " + son2 + " = ?"
        let klienJavobi = +prompt(task)
        let tugriJavob = son1 + son2  

        klienJavobi == tugriJavob ? console.log(`${task} sizning javob to'g'ri --> ${klienJavobi}` ) :
        console.log(`${task} sizning javob noto'g'ri, To'g'ri javob - ${tugriJavob}`);
    }
    else if(tartibi == 3 || tartibi == 4){
        let task = son1 + " - " + son2 + " = ?"
        let klientJavobi = +prompt(task)
        let tugriJavob = son1 - son2  

        klientJavobi == tugriJavob ? console.log(`${task} sizning javob to'g'ri --> ${klientJavobi}` ) :
        console.log(`${task} sizning javob noto'g'ri, To'g'ri javob - ${tugriJavob}`);
    }
    else if(tartibi == 5 || tartibi == 6){
        let task = son1 + " * " + son2 + " = ?"
        let klientJavob = +prompt(task)
        let tugriJavob = son1 * son2  

        klientJavob == tugriJavob ? console.log(`${task} sizning javob to'g'ri--> ${klientJavob}` ) :
        console.log(`${task} sizning javob noto'g'ri, To'g'ri javob - ${tugriJavob}`);
    }
    else if(tartibi == 7 || tartibi == 8){
        let task = son1 + " / " + son2 + " = ?"
        let klientJavobi = +prompt(task)
        let tugriJavob = son1 / son2  

        klientJavobi == tugriJavob ? console.log(`${task} sizning javob to'g'ri --> ${klientJavobi}` ) :
        console.log(`${task} sizning javob noto'g'ri, To'g'ri javob - ${tugriJavob}`);
    }
    else if(tartibi == 9 || tartibi == 10){
        let task = son1 + " % " + son2 + " = ?"
        let klientJavobi = +prompt(task)
        let tugriJavob = son1 % son2  

        klientJavobi == tugriJavob ? console.log(`${task} sizning javob to'g'ri --> ${klientJavobi}` ) :
        console.log(`${task} sizning javob noto'g'ri, To'g'ri javob - ${tugriJavob}`);
    }
}

