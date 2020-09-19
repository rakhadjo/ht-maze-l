var container = document.querySelector("#container");
var activeItem = null;

var active = false;

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {

  if (e.target !== e.currentTarget) {
    active = true;
    activeItem = e.target;

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = 0;
      }

    activeItem.initialX = e.clientX - activeItem.xOffset;
    activeItem.initialY = e.clientY - activeItem.yOffset;
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }

  active = false;
  activeItem = null;
}

function drag(e) {
  if (active) {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);

}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function validateNumber() {
    var x, text;
    x = document.getElementById("numb").value;
  
    if (isNaN(x) || x != 5) {
      text = "Input not valid";
      location.replace("/Users/razvanpopescu/SillyHacks/ht-maze-l/Page3/3.html");
    } else {
      text = "Good job!".bold();
      document.getElementById("valid").style.visibility = "visible";
    }
    document.getElementById("demo").innerHTML = text;
  }