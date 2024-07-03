//inititial the count as 0
//add event listener to listen for clicks on the button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

// variable declaration is very essential.

//setting up count
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

// Saving count
let saveEl = document.getElementById("save-el");
function save() {
  let countDashSeparator = count + "-";
  saveEl.textContent += countDashSeparator;
}


// Function Clear or reset
let totalcount = document.getElementById("totalCount");

function totalCounting() {
    count= ""
    
  //     count = count
  //    totalcount.textContent += count
  countEl.textContent = 0;
  count = 0;
}

let reset = document.getElementById("reset-btn")
console.log(reset )
function resetCount(){
  saveEl.textContent = ""
}

// let aboutText = document.getElementById("about-text");

// // function aboutCounter(){
// //   aboutText.style.display = 'none'
// // }


// let welcome = document.getElementById("greet")
// let name = "Linder"
// let greetings = "Hi there"

// function welcomeGreetings(){
//   welcome.textContent = "Something went wrong, try again later"
//   console.log(greetings + ", " + name + "!")
  
// }


// let myPoints = 3
// function add3Points(){
//   myPoints+=3
// }
 
// function remove1Point(){
//   myPoints-=1
//  }
//  add3Points()
//  add3Points()
//  add3Points()
//  remove1Point()
//  remove1Point()

//  console.log(myPoints)


// let userName = "Udeme"
// let message = "You have 3 new notifications"
// // console.log()
// let messageToUser = message + ", " + userName + "!"
// console.log(messageToUser)

// let welcomeEL = document.getElementById("welcome-eL")
// // console.log(welcomeEL)
// let name = "Udeme Inwang, DemsyCoda"
// let greetings = "Welcome back "
// let myGreeting = greetings + name
// welcomeEL.innerText = myGreeting
// welcomeEL.innerText +="👏"
// console.log(welcomeEL)

// counting down from 5 to 1 timer using function

// function countDown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countDown()

// function myAge(){
//     let yearOfBirth = 1986;
//     let currentYear = "2024";
//     let age = currentYear - yearOfBirth

//     console.log(age)
// }

// myAge()

// //count time lap

//     let lap1 = 34;
//     let lap2 = 33;
//     let lap3 = 36;

// function totalLapTime(){
//     let lapTotal = lap1 + lap2 + lap3;
//     console.log(lapTotal);
// }
// totalLapTime()

// //function the increments the lapsCompleted variable with one
// // run it three times

// let lapsCompleted = 0;

// function finishedLaps(){
//     lapsCompleted = lapsCompleted + 1;

// }
// finishedLaps()
// finishedLaps()
// finishedLaps()

// console.log(lapsCompleted);
