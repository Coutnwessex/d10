const dicePool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const btn = document.querySelector(".btn");
const values = document.querySelectorAll(".value-style")
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");
const btnReset = document.querySelector(".btn-reset");

let audio = new Audio();
audio.src = 'Roll.aac';



btn.addEventListener('click', function(){
    const random1 = getRandomNumber1();
    const random2 = getRandomNumber2();
    const random3 = getRandomNumber3();
    value1.textContent = random1;
    value2.textContent = random2;
    value3.textContent = random3;
    audio.play();
});

btnReset.addEventListener('click', function(){
    for (let value of values) {
        value.textContent = 0;
        console.log("yes");
    }
});


// btn.addEventListener('click', function(){
//     for (let i = 0; i < 3; i++) {
//         let randomNumber = getRandomNumber();
//         for (let value of values){
//             value.textContent = randomNumber;
//         }
//     }
// })

function getRandomNumber1(){
    return Math.ceil(Math.random() * dicePool.length);
}

function getRandomNumber2(){
    return Math.ceil(Math.random() * dicePool.length);
}
function getRandomNumber3(){
    return Math.ceil(Math.random() * dicePool.length);
}

