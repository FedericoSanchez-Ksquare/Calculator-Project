///
///

function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  screen = screen + input;
  if (screen == "" && input == 0) {
  } else if (input == "c") {
    screen = null;
    document.getElementById("screen").value = screen;
  } else if (input == "=") {
    Equals(screen, input);
  }
  document.getElementById("screen").value = screen;
  //screen += screen.setAttribute("value", input);
}

function Equals(screen, input) {
  console.log(screen, input);
  if (input == "=") {
    console.log("igual");
    let res = screen;
    console.log(res + " = test");
    screen = null;
    document.getElementById("screen").value = screen;
    document.getElementById("screen").value = eval(res.toString());
  }
}
