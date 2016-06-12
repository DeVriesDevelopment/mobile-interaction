var container = document.querySelector("body");

window.onload=function(){
  hide(document.querySelectorAll('.blocks'));
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

  var random = Math.floor((Math.random() * $('.blocks').size()));
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';      // Hide
    elements[random].style.display = 'block';     // Show
  }
  randompos = getPosition(elements[random]);
  places();
}

$( ".blocks" ).click(function() {
  parentpos();
  hide(document.querySelectorAll('.blocks'));
});


if ($("body").data("title") === "onethree") {
  function places(){
    if ($("body").data("title") === "onethree") {
      xpos = randompos.x + 4;
      ypos = randompos.y + 4;
    }
    if ($("body").data("title") === "five") {
      xpos = randompos.x + 7;
      ypos = randompos.y + 7;
    }
  }
}

function parentpos(){
  var parentPosition = getPosition(container);
  clickx = event.clientX - parentPosition.x;     // Get the horizontal coordinate
  clicky = event.clientY - parentPosition.y;     // Get the vertical coordinate
}

function onClick(e){
  parentpos();
  count++;
  if( count >= 8 ){
    // saveCsv();
    // location.replace("submenu.html"); //terug
  }
}

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
    } else {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  }
}
