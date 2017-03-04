(function(){
  "use strict";

function showTime() {
    var x = new Date();
    var h = x.getHours();// 0-23
    var m = x.getMinutes();// 0-59
    var s = x.getSeconds();// 0-59
    if(h == 0){
      h = 12;
    }
    if(h > 12){
      h = h - 12;
    }
    if (h < 10){
      h = "0" + h;
    }
    if (m < 10){
      m = "0" + m;
    }
    if (s < 10){
      s = "0" + s;
    }

    var time = h + ":" + m + ":" +  s;
    document.getElementById("MyClockDisplay").innerText = time;
    var color = "#"+"1C7D"+s;

    console.log (color);
    // document.getElementById("MyClockDisplay").innerText = time;
    var timeLine = s / 60 * 100;
    console.log(timeLine);
    document.getElementById("timeBar").style.width = timeLine + "%";

    document.body.style.backgroundColor = color;


  var hov = document.getElementById("MyClockDisplay");
  function isInside(node, target) {
    for (; node != null; node = node.parentNode)
      if (node == target) return true;
  }
  hov.addEventListener("mouseover", function(event) {
    if (!isInside(event.relatedTarget, hov))
  document.getElementById("MyClockDisplay").innerText = color;
  });
  hov.addEventListener("mouseout", function(event) {
    if (!isInside(event.relatedTarget, hov))
      document.getElementById("MyClockDisplay").innerText = time;
  });



}


 showTime();



setInterval(showTime, 1000);









}());
