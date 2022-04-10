//
///

function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  // Inputing screeen with general numbers
  if (input == "c") {
    screen = null;
    document.getElementById("screen").value = screen;
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}

function buttonOp(operator) {
  let screen = document.getElementById("screen").value;
  //operators choice
  switch (operator) {
    case "+":
      if (operator == "+" && screen.includes("+")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));

        Add(screen, operator);
      }
      break;
    case "-":
      if (operator == "-" && screen.includes("-")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));
        Minus(screen, operator);
      }
      break;
    case "*":
      if (operator == "*" && screen.includes("*")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));
        Times(screen, operator);
      }
      break;
    case "/":
      if (operator == "/" && screen.includes("/")) {
        console.log(screen.split(operator));
        GeneralEquals(screen, operator);
      } else {
        console.log(screen.split(operator));
        Times(screen, operator);
      }
      break;
    case "=":
      Equals(screen, operator);
      break;

    default:
  }
}

function GeneralEquals(screen, input) {
  console.log("general equals");

  if ((input = "+")) {
    if (screen == "+" && input == "+") {
    } else {
      let res = screen;
      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value = eval(res.toString()).toFixed(4);
    }
  } else if ((input = "-")) {
    if (screen == "-" && input == "-") {
    } else {
      let res = screen;
      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value = eval(res.toString()).toFixed(4);
    }
  } else if ((input = "*")) {
    if (screen == "*" && input == "*") {
    } else {
      let res = screen;

      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value = eval(res.toString()).toFixed(4);
    }
  } else if ((input = "/")) {
    console.log(input + " input value" && screen.includes("/"));
    if (screen == "/" && input == "/") {
    } else {
      let res = screen;
      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value = eval(res.toString()).toFixed(4);
    }
  }
}

function Equals(screen, input) {
  console.log("igual");
  let res = screen;
  screen = null;
  document.getElementById("screen").value = screen;
  document.getElementById("screen").value = eval(res.toString()).toFixed(4);
}
function Add(screen, input) {
  console.log("Add");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}

function Minus(screen, input) {
  console.log("Minus");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}

function Times(screen, input) {
  console.log("times");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}
function Division(screen, input) {
  console.log("Div");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
  }
}
