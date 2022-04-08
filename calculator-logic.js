///
///

function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  // operators loop
  if (input == "+") {
    Add(screen, input);
  } else if (input == "-") {
    Minus(screen, input);
  } else if (screen == "" && input == 0) {
  } else if (input == "c") {
    screen = null;
    document.getElementById("screen").value = screen;
  } else if (input == "=") {
    Equals(screen, input);
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
  //screen += screen.setAttribute("value", input);
  //test
}

function Add(screen, input) {
  console.log(screen, input);
  console.log("mas");
  if (screen == "" && input == 0) {
  } else if (input == "c") {
    screen = null;
    document.getElementById("screen").value = screen;
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}

function Minus(screen, input) {
  console.log("minus");
  if (screen == "" && input == 0) {
  } else if (input == "." && screen.includes("+")) {
  } else if (input == "c") {
    screen = null;
    document.getElementById("screen").value = screen;
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}

function Times(screen, input) {
  console.log("times");
  if (screen == "" && input == 0) {
  } else if (input == "." && screen.includes(".")) {
  } else if (input == "c") {
    screen = null;
    document.getElementById("screen").value = screen;
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
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
