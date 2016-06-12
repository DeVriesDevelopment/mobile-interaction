var container = document.querySelector("body");

window.onload=function(){
  hide(document.querySelectorAll('.blocks'));
  document.body.addEventListener("click", onClick);
  //container.addEventListener("click", getClickPosition, false);
}
var xpos, ypos;
var count = 0;

function hide (elements) {
  var random = Math.floor((Math.random() * $('.blocks').size()));
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';      // Hide
    elements[random].style.display = 'block';     // Show
  }
  var d = getPosition(elements[random]);
  if(count < 5){
    places(d);
  }
  if (count >= 5){
    replaces(d);
  }
}

function places(r){
  xpos = r.x + 4;
  ypos = r.y + 4;
  var parentPosition = getPosition(container);
  var x = event.clientX - parentPosition.x;     // Get the horizontal coordinate
  var y = event.clientY - parentPosition.y;     // Get the vertical coordinate
  console.log(x, y);
  console.log(xpos, ypos);
  // a = x - xpos;
  // b = y - ypos;
  // console.log(a,b);
}

function replaces(r){
  xpos = r.x + 7;
  ypos = r.y + 7;
  var parentPosition = getPosition(container);
  var x = event.clientX - parentPosition.x;     // Get the horizontal coordinate
  var y = event.clientY - parentPosition.y;     // Get the vertical coordinate
  console.log(x, y);
  console.log(xpos, ypos);
  // a = x - xpos;
  // b = y - ypos;
  // console.log(a,b);
}

$( ".blocks" ).click(function() {
  hide(document.querySelectorAll('.blocks'));
});

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

      //  location.replace(""); //terug
    }
  }
})();
