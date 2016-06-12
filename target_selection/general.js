
function onClick(e){
  count++;
  if( count >= 8 ){
    // saveCsv();
    location.replace("submenu.html"); //terug
  }
}

function parentpos(e){
  var parentPosition = getPosition(container);
  clickx = event.clientX - parentPosition.x;     // Get the horizontal coordinate
  clicky = event.clientY - parentPosition.y;     // Get the vertical coordinate
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

$(window).click(function(e){
  if($('.blocks').is(e.target)){
    return;
  }
  if($('.blocksbig').is(e.target)){
    return;
  }
  if($('#middle_click').is(e.target)){
    return;
  }
  if($('#middle_click2').is(e.target)){
    return;
  }
  else{
    parentpos();
    places();
    errorx = clickx - xpos;
    errory = clicky - ypos;
    console.log("window:",errorx, errory);
  }
});
