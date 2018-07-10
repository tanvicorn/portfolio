/* function multiplyByTwentyFive(number) {
  console.log("Hello, I work")
  return number * 25;
} */

/* function foodName(food) {
  console.log("I love " + food)
} */

var mybio = document.getElementById("bio");

function changeColor() {
  mybio.style.color = "aquamarine";
}

function changeBack() {
  mybio.style.color = "white";
}

mybio.onmouseover = changeColor;
mybio.onmouseout = changeBack;
