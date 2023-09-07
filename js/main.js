class Calculator {
 constructor(previousText, currentText) {
  this.previousText = previousText
  this.currentText = currentText
  // this.makeZero()
 }

 makeZero() {
  this.previousText = ''
  this.currentText = ''
  this.operator = undefined
  this.updateDisplay.value = 0
 }

 addNumberToCurrentScreen(number) {
  console.log(number);
  //  if (number === '.' && this.currentText.includes('.')) return
  this.currentText.value = number
  console.log(currentText);

 }
 chooseOperator(operator) {

 }

 calculate() {

 }
 updateDisplay() {
  console.log(currentText);
  this.currentText.value = this.currentText
  
 }

}


//diff buttons
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('[data-equal]')
//input fields
const previousText = document.querySelector('[data-previous]').value
const currentText = document.querySelector('[data-current]').value

const calculator = new Calculator(previousText, currentText)

console.log(calculator);

numberButtons.forEach(button => {
 button.addEventListener('click', (e) => {
  
  const number = e.target.innerText //string
  console.log(calculator);
  console.log(typeof number); 
  calculator.addNumberToCurrentScreen(number)
  console.log(calculator);
  calculator.updateDisplay()
  console.log(calculator);
 })
})




  // function addition(first, second) {
  //  return first + second
  // }
  // function substraction(first, second) {
  //  return first - second
  // }
  // function multiplication(first, second) {
  //  return first * second
  // }
  // function division(first, second) {
  //  return first / second
  // }