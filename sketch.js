// Simple calculator
// Credits: Roberto Betini Junior

var num1;
var num2;
var num3;
var i;
var add;
var sub;
var mult;
var div;

function setup() {
  createCanvas(600, 600);
  background(255);
  clean();
}

function clean() {
  num1 = 0;
  num2 = 0;
  num3 = 1;
  i = 0;
  add = false;
  sub = false;
  mult = false;
  div = false;
  console.log(num1);
}

function draw() {
  fill(130);
  rect(150, 150, 300, 400, 15);
  fill(200, 170, 0);
  rect(175, 200, 250, 75, 20); //yellow display
  fill(0, 150, 220)
  ellipse(200, 350, 40, 40); //number 1 (button)
  ellipse(250, 350, 40, 40); //number 2 (button)
  ellipse(300, 350, 40, 40); //number 3 (button)
  ellipse(350, 350, 40, 40); //addition (button)
  ellipse(400, 350, 40, 40); //subtraction (button)
  ellipse(200, 400, 40, 40); //number 4 (button)
  ellipse(250, 400, 40, 40); //number 5 (button)
  ellipse(300, 400, 40, 40); //number 6 (button)
  ellipse(350, 400, 40, 40); //multiplication (button)
  ellipse(400, 400, 40, 40); //division (button)
  ellipse(200, 450, 40, 40); //number 7 (button)
  ellipse(250, 450, 40, 40); //number 8 (button)
  ellipse(300, 450, 40, 40); //number 9 (button)
  ellipse(350, 450, 40, 40); //colon (button)
  ellipse(400, 450, 40, 40); //equal (button)
  ellipse(250, 500, 40, 40); //number 0 (button)
  fill(180, 10, 40);
  ellipse(400, 500, 40, 40); //clear (button)
  
  //text
  
  textSize(22)
  fill(0)
  text('1', 194, 356);
  text('2', 244, 356);
  text('3', 294, 356);
  text('4', 194, 406);
  text('5', 244, 406);
  text('6', 294, 406);
  text('7', 194, 456);
  text('8', 244, 456);
  text('9', 294, 456);
  text('0', 244, 506);
  text('+', 344, 356);
  text('-', 346, 405);
  text('X', 393, 357);
  text('/', 397, 406);
  text('=', 394, 456);
  text('C', 392, 508);
  textSize(40);
  text(',', 344, 450);
  textAlign(LEFT);
  textSize(20);
  text(num1, 195, 230);
  if (add == true) {
  text('+', 180, 255);
  text(num2, 195, 255);}
  if (sub == true) {
  text('-', 180, 255);
  text(num2, 195, 255);}
  if (mult == true) {
  text('x', 180, 255);
  text(num3, 195, 255);}
  if (div == true) {
  text('/', 180, 255);
  text(num3, 195, 255);}
  
  
}

//
function mousePressed() {
 if (sq(20) >= sq(mouseX - 200) + sq(mouseY - 350)) { //number 1
   calcNum(1);
     }
  if (sq(20) >= sq(mouseX - 250) + sq(mouseY - 350)) { //number 2
    calcNum(2);
     }
  if (sq(20) >= sq(mouseX - 300) + sq(mouseY - 350)) { //number 3
   calcNum(3);
     }
  if (sq(20) >= sq(mouseX - 200) + sq(mouseY - 400)) { //number 4
   calcNum(4);
     }
  if (sq(20) >= sq(mouseX - 250) + sq(mouseY - 400)) { //number 5
   calcNum(5);
     }
  if (sq(20) >= sq(mouseX - 300) + sq(mouseY - 400)) { //number 6
   calcNum(6);
     }
  if (sq(20) >= sq(mouseX - 200) + sq(mouseY - 450)) { //number 7
   calcNum(7);
     }
  if (sq(20) >= sq(mouseX - 250) + sq(mouseY - 450)) { //number 8
   calcNum(8);
     }
  if (sq(20) >= sq(mouseX - 300) + sq(mouseY - 450)) { //number 9
   calcNum(9);
     }
  if (sq(20) >= sq(mouseX - 250) + sq(mouseY - 500)) { //number 0
   calcNum(0);
     }
  if (sq(20) >= sq(mouseX - 350) + sq(mouseY - 450)) { //colon
    if (i >= 0) {
      i = -1;
      }
     }
  if (sq(20) >= sq(mouseX - 400) + sq(mouseY - 500)) { //clear
      clean();
     }
  if (sq(20) >= sq(mouseX - 350) + sq(mouseY - 350)) { //addition
    add = true;
    sub = false;
    mult = false;
    div = false;
    i = 0;
    num1 += num2;
    num2 = 0;
    console.log(num1);
     }
  if (sq(20) >= sq(mouseX - 350) + sq(mouseY - 400)) { //subtraction
    add = false;
    sub = true;
    mult = false;
    div = false;
    i = 0;
    num1 -= num2;
    num2 = 0;
    console.log(num1);
     }
  if (sq(20) >= sq(mouseX - 400) + sq(mouseY - 350)) { //multiplication
    add = false;
    sub = false;
    mult = true;
    div = false;
    i = 0;
    num1 *= num3;
    num3 = 1;
    console.log(num1);
     }
  if (sq(20) >= sq(mouseX - 400) + sq(mouseY - 400)) { //division
    add = false;
    sub = false;
    mult = false;
    div = true;
    i = 0;
    num1 /= num3;
    num3 = 1;
    console.log(num1);
     }
  if (sq(20) >= sq(mouseX - 400) + sq(mouseY - 450)) { //equal
    if (add == true) {
    i = 0;
    num1 += num2;
    num2 = 0;
    console.log(num1);
    add = false;
    }
    if (sub == true) {
    i = 0;
    num1 -= num2;
    num2 = 0;
    console.log(num1);
    sub = false;
    }
    if (mult == true) {
    i = 0;
    num1 *= num3;
    num3 = 1;
    console.log(num1);
    mult = false;
    }
    if (div == true) {
    i = 0;
    num1 /= num3;
    num3 = 1;
    console.log(num1);
    div = false;
    }
    if (div == false && mult == false && add == false && sub == false) {
    console.log(num1);
    }
  }

function calcNum(n) {
  if (add == false && sub == false && mult == false && div == false) { // if no operation button is pressed, then happens the following
     if(i == 1) {
    num1 = n + num1 * pow(10, i); 
   } else if (i <= -1) {
       num1 = num1 + n * pow(10, i);
       i--;
   }
     else {
       num1 = n;
       i++;
   }
      console.log(num1);
 }
  if (add == true || sub == true) { // addition and subtraction
     if(i == 1) {
    num2 = n + num2 * pow(10, i); 
   } else if (i <= -1) {
       num2 = num2 + n * pow(10, i);
       i--;
   }
     else {
       num2 = n
       i++;
   }
      console.log(num2);
 }
  if (mult == true || div == true) { //mutiplication and division
    if (num3 == 0) {
      num3 = 1;
    }
     if(i == 1) {
    num3 = n + num3 * pow(10, i); 
   } else if (i <= -1) {
       num3 = num3 + n * pow(10, i);
       i--;
   }
     else {
       num3 = n
       i++;
   }
      console.log(num3);
 }
} }