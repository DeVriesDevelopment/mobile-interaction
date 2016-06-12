var container = document.querySelector("body");

window.onload=function(){
  hide(document.querySelectorAll('.blocksbig'));
  container.addEventListener("click", onClick);
}

function hide (elements) {
  errorx = clickx - xpos;
  errory = clicky - ypos;
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
  Good.push(1);
  Rows.push("Block");
  Xerror.push(errorx);
  Yerror.push(errory);
  console.log(Rows,Xerror, Yerror, Good);
});

function places(){
  xpos = randompos.x + 7;
  ypos = randompos.y + 7;
}
//
// $( "#middle_click2" ).click(function() {
//   parentpos();
//   var randomp = getPosition(this);
//   var t = randomp.x + 7;
//   var g = randomp.y + 7;
//   places();
//   errorx = clickx - t;
//   errory = clicky - g;
//   Good.push(1);
//   Rows.push("Middle");
//   Xerror.push(errorx);
//   Yerror.push(errory);
//   console.log(Rows,Xerror, Yerror, Good);
// });
