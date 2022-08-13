'use strict';
const result = document.getElementById('result');
let randNumber = 0;
let health = 5;
function generateRandomNumber(){
  randNumber = Math.floor(Math.random() * 99);
}
window.onload = function(){
  generateRandomNumber();
}
function showMessage(message) {
  result.innerHTML = message;
}
function guessNumFunc() {
  const guessNumber = document.getElementById('guessNumber').value;
  if (guessNumber == '') {
    showMessage("عزیز هنوز عددی حدس نزدیا....");
  }else if (guessNumber > 99 || guessNumber < 0) {
    showMessage('لطفا مقدار عددی بین ۰ تا ۹۹ رو وارد کن');
  } else if (guessNumber < randNumber) {
    showMessage('آخ... اشتباه حدس زدی بیشترش کن و دوباره تلاش کن');
     decreaseHealth();
  } else if (guessNumber > randNumber) {
    showMessage('آخ... اشتباه حدس زدی  کمترش کن و دوباره تلاش کن');
     decreaseHealth();
  } else if (guessNumber == randNumber && health > 0) {
    if (confirm("به به دمت گرم ...  خود خودشه خیلی حال داد. یه بار دیگه بازی می کنی؟ ")) {
      reset();
    }
  }
}

function decreaseHealth(){
  if(health <= 0){
    if (confirm('جونی دیگه برات نمونده عدد ' + randNumber + ' بود. یه بار دیگه بازی می کنی؟ ')) {
      reset();
    }
    return;
  }
  const heartEle = document.getElementById('heart' + health);
  heartEle.classList.add('fill-gray-500', 'stroke-gray-700');
  health --;
}
function reset(){
   generateRandomNumber();
   health = 5;
   for (let index = 1; index <= 5; index++){
     const heartEle = document.getElementById('heart' + index);
     heartEle.classList.remove('fill-gray-500', 'stroke-gray-700');
   }
   guessNumber.value = '';
   showMessage("");
}




