var distance = 10;
var counter = 0;
function onClick(){
  counter += 1;
  console.log("Clicked");
  if(counter === 15){
      window.location.replace("pag4.html");
    }
    var btn = document.getElementById("btn");
    btn.style.position = "relative";
    btn.style.top = Math.floor((Math.random() * 500)) + "px";
    btn.style.left = Math.floor((Math.random() * 400)) + "px";
}

var x = setInterval(function() {

  document.getElementById("demo").innerHTML = "<span style ='color:red; font-size:20px;'>"+ "Time remaining: " + distance + "s" + "</span>";
  distance -= 1;

  if (distance < 0) {
    window.location.replace("pag1.html");
  }
}, 1000);