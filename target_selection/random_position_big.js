var container = document.querySelector("body");

window.onload=function(){
  hide(document.querySelectorAll('.blocksbig'));
  container.addEventListener("click", onClick);
}

var xpos, ypos; //position of the random block
var count = 0; //counter for the number of tests
var randompos; //the random block
var clickx = 0; //the x click position
var clicky = 0; //the y click position
var errorx, errory; //the amount by which it is off

function hide (elements) {
  errorx = clickx - xpos;
  errory = clicky - ypos;
  console.log(errorx, errory);

  //  saveCsv(errorx, errory);

  var random = Math.floor((Math.random() * $('.blocksbig').size()));
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';      // Hide
    elements[random].style.display = 'block';     // Show
  }
  randompos = getPosition(elements[random]);
  places();
}

$( ".blocksbig" ).click(function() {
  parentpos();
  hide(document.querySelectorAll('.blocksbig'));
});

function places(){
  xpos = randompos.x + 7;
  ypos = randompos.y + 7;
}

$( "#middle_click2" ).click(function() {
  parentpos();
  var randomp = getPosition(this);
  var t = randomp.x + 7;
  var g = randomp.y + 7;
  places();
  errorx = clickx - t;
  errory = clicky - g;

  console.log("middle:",errorx, errory);
});
