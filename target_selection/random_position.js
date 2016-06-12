var container = document.querySelector("body");

window.onload=function(){
  hide(document.querySelectorAll('.blocks'));
  document.body.addEventListener("click", onClick);
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

  saveCsv(errorx, errory);

  var random = Math.floor((Math.random() * $('.blocks').size()));
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';      // Hide
    elements[random].style.display = 'block';     // Show
  }
  randompos = getPosition(elements[random]);
  if(count < 5){
    places();
  }
  if (count >= 5){
    replaces();
  }
}

function places(){
  xpos = randompos.x + 4;
  ypos = randompos.y + 4;
}

function replaces(){
  xpos = randompos.x + 7;
  ypos = randompos.y + 7;
}

$( ".blocks" ).click(function() {
  parentpos();
  hide(document.querySelectorAll('.blocks'));
});

function parentpos(){
  var parentPosition = getPosition(container);
  clickx = event.clientX - parentPosition.x;     // Get the horizontal coordinate
  clicky = event.clientY - parentPosition.y;     // Get the vertical coordinate
}

var onClick = (function(){
  return function(){
    count++;
    if( count >= 5 ){
      var x = document.getElementsByClassName("blocks");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.width = "12px";
        x[i].style.height = "12px";
        x[i].style.border = "14px solid red";
      }
    }
    if( count >= 10 ){
      location.replace("submenu.html"); //terug
    }
  }
})();
