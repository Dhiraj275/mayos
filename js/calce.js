class Calculator {
constructor(previousOperandTextElement, currentOperandTextElement) {
this.previousOperandTextElement = previousOperandTextElement
this.currentOperandTextElement = currentOperandTextElement
this.clear()
}

clear() {
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete() {
this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber(number) {
if (number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {
if (this.currentOperand === '') return
if (this.previousOperand !== '') {
this.compute()
}
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}

compute() {
let computation
const prev = parseFloat(this.previousOperand)
const current = parseFloat(this.currentOperand)
if (isNaN(prev) || isNaN(current)) return
switch (this.operation) {
case '+':
computation = prev + current
break
case '-':
computation = prev - current
break
case '*':
computation = prev * current
break
case '÷':
computation = prev / current
break
default:
return
}
this.currentOperand = computation
this.operation = undefined
this.previousOperand = ''
}

getDisplayNumber(number) {
const stringNumber = number.toString()
const integerDigits = parseFloat(stringNumber.split('.')[0])
const decimalDigits = stringNumber.split('.')[1]
let integerDisplay
if (isNaN(integerDigits)) {
integerDisplay = ''
} else {
integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
}
if (decimalDigits != null) {
return `${integerDisplay}.${decimalDigits}`
} else {
return integerDisplay
}
}

updateDisplay() {
this.currentOperandTextElement.innerText =
this.getDisplayNumber(this.currentOperand)
if (this.operation != null) {
this.previousOperandTextElement.innerText =
`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
} else {
this.previousOperandTextElement.innerText = ''
}
}
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
button.addEventListener('click', () => {
calculator.appendNumber(button.innerText)
calculator.updateDisplay()
})
})

operationButtons.forEach(button => {
button.addEventListener('click', () => {
calculator.chooseOperation(button.innerText)
calculator.updateDisplay()
})
})

equalsButton.addEventListener('click', button => {
calculator.compute()
calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
calculator.clear()
calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
calculator.delete()
calculator.updateDisplay()
})
/* menu*/
function menu(){
wm.style.display ="none";
}
/*showgame*/
var sg = document.getElementById("popup");
function showgame(){
sg.style.display ="block";
}
var setting = document.getElementById("setting")
/*poup*/
function popup(){
sg.style.display ="none";
setting.style.display ="none";
}
/*remained*/
var footer= document.getElementById("footer");
var elem = document.documentElement;
function openFullscreen() {
  wm.style.display ="none";
  screen.style.display ="none";
  if (elem.requestFullscreen) {
  elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
  elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
  elem.msRequestFullscreen();}
}
function Fullscreen() {
  wm.style.display ="none";
  screen.style.display ="none";
  if (document.exitFullscreen) {
  document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
  document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
  document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
  document.msExitFullscreen();
  }
}
function block() {
if(screen.style.display ="block"){
screen.style.display ="none";
}
else{
screen.style.display ="block";
}
}
function show() {
if(screen.style.display ="none"){
screen.style.display ="block";
}
else{
screen.style.display ="none";
}
}
var wm = document.getElementById("windowmenu")
function showmenu(){
if(wm.style.display ="none"){
wm.style.display ="block";
}
else{
wm.style.display ="none";
}
}

/*show and hide*/
var c = document.getElementById("calculator");
function showcal(){
wm.style.display ="none";
c.style.display ="block";
}
function cal(){
if(c.style.display ="block"){
c.style.display ="none";
}
else{
c.style.display ="block";
}
}
/*celce*/

/*open setting*/
var setting = document.getElementById("setting");
function opensetting(){
setting.style.display ="block";
document.getElementById("clock").style.display="none";
document.getElementById("desk_icon").style.display="none";
}

/*bg change*/
var cont =document.getElementById("content")
function change1(){
cont.style.backgroundImage ="url(img/bg.jpeg)";
}
function change2(){
cont.style.backgroundImage ="url(img/bg4.jpg)";
}
function change3(){
cont.style.backgroundImage ="url(img/bg5.jpg)";
}
function change5(){
cont.style.backgroundImage ="url(img/bg1.jpeg)";
}
function change6(){
cont.style.backgroundImage ="url(img/bg2.jpeg)";
}
function change7(){
cont.style.backgroundImage ="url(img/b3.jpeg)";
}
/*date*/
var date = new Date();
var d = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
setTimeout(date, 1000);

document.getElementById("date").innerHTML = d;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;


let input= document.querySelector(('#pass'));

input.addEventListener('keyup', (e) => {
if(e.keyCode === 13){
  if (typeof(Storage) !== "undefined") {
var spn = document.getElementById("span");
var btn = document.getElementById("btn");
var x = localStorage.getItem("password");
var a = document.getElementById("pass").value;
if(a!= x){
document.getElementById("span").innerHTML= "Wrong password" ;
return false;
}
else
{
document.getElementById("span").innerHTML="WELCOME";
document.getElementById("password").style.display ="none";
document.getElementById("content").style.display ="block";
document.getElementById("footer").style.display ="block";
}
}
}


});
function check(){
  if (typeof(Storage) !== "undefined") {
var spn = document.getElementById("span");
var btn = document.getElementById("btn");
var x = localStorage.getItem("password");
var a = document.getElementById("pass").value;
if(a!= x){
document.getElementById("span").innerHTML= "Wrong password" ;
return false;
}
else
{
document.getElementById("span").innerHTML="WELCOME";
document.getElementById("password").style.display ="none";
document.getElementById("content").style.display ="block";
document.getElementById("footer").style.display ="block";
}
}
}



var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
/*select wall paper*/
function showwallpaper(){
document.getElementById("selectwp").style.display ="block";
}
let digitalClock = () => {

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let amorpm = hours >= 12 ? 'PM' : 'AM';


    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("amorpm").innerHTML = amorpm;

    setTimeout(digitalClock, 1000);

} 

digitalClock();
function show_date(){
document.getElementById("menu").style.display="block";
}
function _date(){
document.getElementById("menu").style.display="none";
}
function logout(){
 document.getElementById("password").style.display="block";
 document.getElementById("footer").style.display="none";
 document.getElementById("pass").value ="" ;
 document.getElementById("windowmenu").style.display ="none" ;
  document.getElementById("span").innerHTML="";
   
}
function closepopup_setting(){
document.getElementById("setting").style.display="none";
document.getElementById("desk_icon").style.display="block";
document.getElementById("clock").style.display="block";
}
function closecal(){
document.getElementById("calculator").style.display="none";
}
function closepopup(){
document.getElementById("popup").style.display="none";
}
function close_date(){
	document.getElementById("menu").style.display="none";
}
function closemenu(){
	document.getElementById("windowmenu").style.display="none";
	document.getElementById("browser").style.display="none";
	document.getElementById("clock").style.display="block";		
}
function show_browser(){
document.getElementById("browser").style.display="block";
document.getElementById("clock").style.display="none";
}
function switch_mobile(){
 document.getElementById("desktop").style.textShadow="none";
 document.getElementById("mobile").style.textShadow="0 0 8px red, 0 0 8px red, 0 0 10px red, 0 0 8px red";
 document.getElementById("mobile_game").style.display="block";
  document.getElementById("desk_game").style.display="none";
}
function switch_desktop(){
	document.getElementById("mobile").style.textShadow="none";
	document.getElementById("desktop").style.textShadow="0 0 8px red, 0 0 8px red, 0 0 10px red, 0 0 8px red";
	document.getElementById("desk_game").style.display="block";
	document.getElementById("mobile_game").style.display="none";
}
function closepopup_games(){
	document.getElementById("mayos_game").style.display="none";
}
function open_mayos_games(){
	document.getElementById("mayos_game").style.display="block";
}