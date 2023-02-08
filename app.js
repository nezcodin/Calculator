/////USER STORY/////
//The user should be able to...
  //Select numbers which populate the screen up top
  //Add numbers X
  //Subtract numbers X
  //Divide numbers X
  //Multiply numbers X
  //See the output from math operations in the screen up top

//Get Elements Global

const field = document.getElementById('input-output-field')


//Functions

const type = document.querySelectorAll('data-type')
const value = document.querySelectorAll('value')


//Add function
// const add = (num1, num2) => {
//   console.log(num1 + num2)
// }
// add(2, 5)

let is_clicked = false //every button should start off as this and change to true when clicked

//using event.currentTarget (event is shortened to e)

// numbers.forEach((btn) => {
//   btn.addEventListener('click', (e) => {

//   })
// })

//for now just see if you can make an event listener for every button and have it work :-) 
//THEN see if you can condense it

function showSomething() {

}


//const add = () => {}





//Subtract function
const subtract = (num1, num2) => {
  console.log(num1 - num2)
}
subtract(10, 7)

//Multiply function
const multiply = (num1, num2) => {
  console.log(num1 * num2)
}
multiply(9, 3)

//Divide function
const divide = (num1, num2) => {
  console.log(num1 / num2)
}
divide(10, 2)