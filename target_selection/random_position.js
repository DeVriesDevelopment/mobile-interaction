
var random = Math.floor((Math.random() * $('.blocks').size()));
$('.blocks').hide().eq(random).show();

$( "div" ).click(function() {
  location.reload();
});
