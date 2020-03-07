'use strict';
var attempts;
loop1: for (attempts = 0; attempts <6; attempts++) {
  var quiz7 = prompt('Guess my fave food');
  loop2: for (var answeIndex=0; answerIndex< faveFoods.length; answerIndex++) {
    quiz7=quiz7.toLocaleLowerCase();
    if (quiz7===favFoods[answeIndex]) {
      console.log(quiz7);
      alert('great job!');
      break loop1
    } else{
      alert('Sorry, I love pizza, steak and ice cream')
    }
  }
  if (attempts<6) alert("wrong")
}