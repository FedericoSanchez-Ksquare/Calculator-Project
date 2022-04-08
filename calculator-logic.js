///
///

function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  screen = screen + input;
  if (screen == "" && input == 0) {
  }
  document.getElementById("screen").value = screen;
  //screen += screen.setAttribute("value", input);
}
