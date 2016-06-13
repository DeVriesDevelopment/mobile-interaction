var Name = [];
var Rows = [];
var Xerror = [];
var Yerror = [];
var Good = [];
var xpos, ypos; //position of the random block
var count = 0; //counter for the number of tests
var randompos; //the random block
var clickx = 0; //the x click position
var clicky = 0; //the y click position
var errorx, errory; //the amount by which it is off
var start = new Date();


function onClick(e){
  createSubtest(localStorage.testId, localStorage.subTestType);
  count++;
  if( count >= 8 ){
    var data = [["Name", "X distance to target", "Y distance to target", "Good/Bad"]];
    for(var i = 0; i < Rows.length; i++)
    {
      data.push([Rows[i], Xerror[i], Yerror[i], Good[i]]);
    }
    var csvContent = "";
    data.forEach(function(infoArray, index){
      dataString = infoArray.join(",");
      csvContent += index < data.length ? dataString + "\n" : dataString;
    });
    var end = new Date()-start;
    csvContent += "\n" + end + "ms";
    saveCsv(csvContent);
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
  // if($('#middle_click').is(e.target)){
  //   return;
  // }
  // if($('#middle_click2').is(e.target)){
  //   return;
  // }
  else{
    parentpos();
    places();
    errorx = clickx - xpos;
    errory = clicky - ypos;
    Rows.push("Window");
    Good.push(0);
    Xerror.push(errorx);
    Yerror.push(errory);
  }
});
