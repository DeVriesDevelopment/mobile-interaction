var random = Math.floor((Math.random() * $('.blocks').size()));
$('.blocks').hide().eq(random).show();

// var arr = $(".blocks").toArray();
// var item = $(this).attr('id');


// var myElement = document.querySelector(item);
// var position = getPosition(myElement);
var x, y;

$( "div" ).click(function() {
  d = $(this).position();
  getPosition(d);
  xpos = d.left;
  ypos = d.top;
  console.log(xpos, ypos);
  location.reload();
});


// function getOffset( el ) {
//   var _x = 0;
//   var _y = 0;
//   while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
//     _x += el.offsetLeft - el.scrollLeft;
//     _y += el.offsetTop - el.scrollTop;
//     el = el.offsetParent;
//   }
//   return { top: _y, left: _x };
// }
