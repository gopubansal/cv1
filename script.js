'use strict';

/*👈👈
console.log(document.querySelector(`.message`).textContent);

//document.querySelector(` `) : selects the entire element in html. write the class/id name b/w the commas as we write in css.

// after it write: .textContent to get the content of the element

// console.log(document.querySelector(`.laber-source`).textContent);
// console.log((document.querySelector(`.message`).value = 76));

// console.log((document.querySelector(`.message`).textContent = `gopal`));

//DOM: Document object Mdel😍
//       (Structred representation of the HTML document)

//       allows JS to interact with HTML & CSS & manipulate them

//DOM are not part of JS but are APIs
//most of the APIs are written in JS and browsers implement the kind of same APIs.
//
console.log((document.querySelector(`.guess`).value = 2));
console.log(document.querySelector(`.guess`).value);
console.log((document.querySelector(`.guess`).textContent = 3));
console.log(
  document.querySelector(`.guess`).value,
  document.querySelector(`.guess`).textContent
);

// .value for number
//.textcontent for `string`

👉👉*/

//Event listenter 😍

// (event listner is method)
// (wait for certain event to happen i.e.  mouse click,key press etc. and react to the even as we wish)

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// defining random no. first outside the check button....if define inside then the random no. will change every time user clicks.
let score = 20;
let highs = 0;

// putting the random no. inside the secret box.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when input is invalid
  if (!guess) {
    document.querySelector(`.message`).textContent = `🛑 invalid selection`;
  }

  //when the player wins
  else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number Motu  !!`;
    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highs) {
      highs = score;
      document.querySelector('.highscore').textContent = highs;
    }

    // css styling
    document.querySelector('body').style.backgroundColor = '#60b347';
    // in the qurery selctor: the element i.e. the body here
    //.style.PropertyName = 'value in strings'
    document.querySelector('.number').style.width = '30rem';
  }

  // when input  is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too High! baby`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game Over !`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
  // when input  is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉 Too Low! baby`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game Over !`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

//event handler on Check button
//two arguments : 'click', function
// function : checks the user input
// if statement :  if the user don't put then it changes the the text 'start guessing' to 'invalid selection'

// restoring everything when click on AGAIN Button😍

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  //body color to black

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // reassigning random secret no.

  document.querySelector(`.number`).textContent = '?';
  //hiding & replacing with ? , the correct ans field

  document.querySelector('.number').style.width = '15rem';
  //resizing the correct div
  score = 20;
  document.querySelector('.score').textContent = 20;
  //restoring score to 20

  document.querySelector('.guess').value = '';
  //blanking the guess field

  document.querySelector('.message').textContent = 'Start guessing...';
  // restoring the message field
});
