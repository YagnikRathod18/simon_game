// let gamesequence = [];
// let usersequence = [];
// let colors = ['red', 'yellow', 'green', 'purple'];

// let started = false;
// let level = 0;
// let h2 = document.querySelector('h2');

// document.addEventListener('keypress', function () {
//     if (!started) {
//         console.log('Key pressed');
//         started = true;
//         levelUp();
//     }
// });

// function btnflash(btn) {
//     btn.classList.add('flash');
//     setTimeout(function () {
//         btn.classList.remove('flash');
//     }, 500);
// }
// function userflash(btn) {
//     btn.classList.add('userflash');
//     setTimeout(function () {
//         btn.classList.remove('userflash');
//     }, 500);
// }

// function levelUp() {
//     level++;
//     h2.innerText = `Level ${level}`;
//     let randomno = Math.floor(Math.random() * colors.length);
//     let randomcolor = colors[randomno];
//     let btn = document.querySelector(`.${randomcolor}`);
//     gamesequence.push(randomcolor);
//     console.log(gamesequence);
//     btnflash(btn);
// }

// function checkAns(){
//   //  console.log('Current level', level);
//   if (usersequence[idx] === gamesequence[idx]) { 
//  if(usersequence.length === gamesequence.length){
   
//      levelUp();
 
//   }else{
//     h2.innerText = 'Game Over, Press Any Key to Restart';
//   }
// }
// };

// function btnpress() {
//     console.log(this);
//     let btn = this;
//     userflash(btn);
//     userflash =btn.getAttribute('id');
//     usersequence.push(userflash);
//     console.log(usersequence); 
// }

// let allbtns = document.querySelectorAll('.btn');
// for (let btn of allbtns) {
//     btn.addEventListener('click', btnpress);
// }


let gamesequence = [];
let usersequence = [];
let colors = ['red', 'yellow', 'green', 'purple'];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');

// Start game on keypress
document.addEventListener('keypress', function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

function btnflash(btn) {
  btn.classList.add('flash');
  setTimeout(() => btn.classList.remove('flash'), 500);
}

function userflash(btn) {
  btn.classList.add('userflash');
  setTimeout(() => btn.classList.remove('userflash'), 500);
}

function levelUp() {
  usersequence = []; // reset user input each round
  level++;
  h2.innerText = `Level ${level}`;

  let randomno = Math.floor(Math.random() * colors.length);
  let randomcolor = colors[randomno];
  let btn = document.getElementById(randomcolor);

  gamesequence.push(randomcolor);
  console.log("Game sequence:", gamesequence);

  btnflash(btn);
}

// check user answer
function checkAns(idx) {
  if (usersequence[idx] === gamesequence[idx]) {
    if (usersequence.length === gamesequence.length) {
      // completed round correctly
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = 'Game Over, Press Any Key to Restart';
    resetGame();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);

  let color = btn.getAttribute('id');
  usersequence.push(color);

  checkAns(usersequence.length - 1);
}

function resetGame() {
  started = false;
  gamesequence = [];
  usersequence = [];
  level = 0;
}

// attach listeners
let allbtns = document.querySelectorAll('.btn');
for (let btn of allbtns) {
  btn.addEventListener('click', btnpress);
}