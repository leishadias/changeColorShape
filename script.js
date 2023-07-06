var btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", change_bg);
btn[1].addEventListener("click", change_shape);

var colors = ["red", "yellow", "black", "white", "blue", "cyan"];

function change_bg() {
  var num = Math.floor(Math.random() * 6);
  var bgelement = document.getElementById("circle");
  bgelement.style.backgroundColor = colors[num];
}

function change_shape() {
  var num = Math.floor(Math.random() * 6);
  var shapediv = document.getElementById("shape");
  switch (num) {
    case 0:
      //square
      shapediv.style.borderRadius = 0;
      shapediv.style.height = "50px";
      shapediv.style.width = "50px";
      console.log("square");
      break;
    case 1:
      //rectangle
      shapediv.style.borderRadius = 0;
      shapediv.style.height = "50px";
      shapediv.style.width = "25px";
      console.log("rectangle");
      break;
    case 2:
      //oval
      shapediv.style.borderRadius = "50%";
      shapediv.style.height = "25px";
      shapediv.style.width = "50px";
      console.log("oval");
      break;
    case 3:
      //triangle
      shapediv.style.width = 0;
      shapediv.style.height = 0;
      shapediv.style.borderLeft = "25px solid transparent";
      shapediv.style.borderRight = "25px solid transparent";
      shapediv.style.borderBottom = "50px solid pink";
      shapediv.style.borderRadius = 0;
      console.log("triangle");
      break;
    case 4:
      //trapezoid
      shapediv.style.borderBottom = "50px solid pink";
      shapediv.style.borderLeft = "25px solid transparent";
      shapediv.style.borderRight = "25px solid transparent";
      shapediv.style.height = 0;
      shapediv.style.width = "125px";
      shapediv.style.borderRadius = 0;
      console.log("trapezoid");
      break;
    case 5:
      //trapezoid
      shapediv.style.borderBottom = "50px solid pink";
      shapediv.style.borderLeft = "25px solid transparent";
      shapediv.style.borderRight = "25px solid transparent";
      shapediv.style.height = 0;
      shapediv.style.width = "125px";
      shapediv.style.borderRadius = 0;
      console.log("trapezoid");
      break;
    default:
      shapediv.style.height = "100px";
      shapediv.style.width = "100px";
      shapediv.style.borderRadius = "50%";
      console.log("default");
      break;
  }
}
