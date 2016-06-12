var container = document.querySelector("body");

window.onload=function(){
  hide(document.querySelectorAll('.blocks'));
  container.addEventListener("click", onClick);
}

function hide (elements) {
  errorx = clickx - xpos;
  errory = clicky - ypos;
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
  Good.push(1);
  Rows.push("Block");
  Xerror.push(errorx);
  Yerror.push(errory);
  console.log(Rows,Xerror, Yerror, Good);
});

function places(){
  xpos = randompos.x + 4;
  ypos = randompos.y + 4;
}
//
// $( "#middle_click" ).click(function() {
//   parentpos();
//   var randomp = getPosition(this);
//   var t = randomp.x + 4;
//   var g = randomp.y + 4;
//   places();
//   errorx = clickx - t;
//   errory = clicky - g;
//   Good.push(1);
//   Rows.push("Middle");
//   Xerror.push(errorx);
//   Yerror.push(errory);
//   console.log(Rows,Xerror, Yerror, Good);
// });
