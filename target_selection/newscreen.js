//new screen

var container = document.querySelector(".container");

window.onload=function(){
  container.addEventListener("click", onClick, false);
}

function onClick(e){
  var target = e.target;

  if(target.id == "container")
  window.location.href = target_selection.html;
}
