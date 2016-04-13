//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
var myColors = [0,0,0];
$(document).ready(setBackground());

function setBackground() {
  myColors[0] = parseInt($("#redVal").val());
  myColors[1] = parseInt($("#blueVal").val());
  myColors[2] = parseInt($("#greenVal").val());
  var myBackground = "rgb("+ myColors[0] +","+ myColors[1]  +","+ myColors[2] +")";
  $("body").css("background", myBackground);
  $("#rgbCode").text("rgb("+ myColors[0] +","+ myColors[1]  +","+ myColors[2] +")");
  $("#hexCode").text("#" + myColors[0].toString(16) + myColors[1].toString(16) + myColors[2].toString(16));
}

$("input").change(function(){
  setBackground();
});
