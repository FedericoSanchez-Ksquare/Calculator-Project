//
///
let dotCounter = false;
let resCounter = false;
let opCounter = false;
function buttonFun(input) {
  let screen = document.getElementById("screen").value;
  // Inputing screeen with general numbers
  if (resCounter == true) {
    if (input == "c") {
      screen = null;
      document.getElementById("screen").value = screen;
    } else {
      screen = null;
      document.getElementById("screen").value = screen;
      screen = input;
      resCounter = false;
      document.getElementById("screen").value = screen;
    }
  } else {
    resCounter = false;
    if (input == "c") {
      screen = null;
      document.getElementById("screen").value = screen;
    } else {
      screen = screen + input;
      opCounter = true;
      resCounter = false;
      document.getElementById("screen").value = screen;
    }
  }
}

function buttonOp(operator) {
  let screen = document.getElementById("screen").value;
  //operators choice
  switch (operator) {
    case "+":
      resCounter = false;
      dotCounter = false;
      console.log(dotCounter);
      console.log(screen.endsWith(operator) + " ends with");
      if (screen.endsWith(operator) == true) {
      } else {
        if (opCounter == true) {
          GeneralEquals(screen, "+");
        } else {
          Add(screen, operator);
        }
      }
      break;
    case "-":
      dotCounter = false;
      resCounter = false;
      console.log(screen.endsWith(operator) + " ends with");
      if (screen.endsWith(operator) == true) {
      } else {
        if (opCounter == true) {
          GeneralEquals(screen, "-");
        } else {
          Minus(screen, operator);
        }
      }
      break;
    case "*":
      dotCounter = false;
      resCounter = false;
      console.log(screen.endsWith(operator) + " ends with");
      if (screen.endsWith(operator) == true || screen.endsWith("/")) {
      } else {
        if (opCounter == true) {
          GeneralEquals(screen, "*");
        } else {
          Times(screen, operator);
        }
      }
      break;
    case "/":
      dotCounter = false;
      resCounter = false;
      if (screen.endsWith(operator) == true || screen.endsWith("*")) {
      } else {
        if (opCounter == true) {
          GeneralEquals(screen, "/");
        } else {
          Division(screen, operator);
        }
      }
      break;
    case ".":
      if (dotCounter == true) {
      } else {
        dotCounter = true;
        screen = screen + operator;
        document.getElementById("screen").value = screen;
      }
    case "=":
      Equals(screen, operator);
      break;

    default:
  }
}

function GeneralEquals(screen, input) {
  console.log("general equals");
  let res = screen;
  switch (input) {
    case "+":
      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value =
        eval(res.toString()).toFixed(4) + input;

      opCounter = false;
      break;
    case "-":
      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value =
        eval(res.toString()).toFixed(4) + input;
      opCounter = false;
      break;
    case "*":
      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value =
        eval(res.toString()).toFixed(4) + input;

      opCounter = false;
      break;
    case "/":
      screen = null;
      document.getElementById("screen").value = screen;
      document.getElementById("screen").value =
        eval(res.toString()).toFixed(4) + input;

      opCounter = false;
      break;
    default:
  }
}

function Add(screen, input) {
  console.log("Add");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
    opCounter = false;
  }
}

function Minus(screen, input) {
  console.log("Minus");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
    opCounter = false;
  }
}

function Times(screen, input) {
  console.log("times");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
    opCounter = false;
  }
}
function Division(screen, input) {
  console.log("Div");
  if (screen == "" && input == 0) {
  } else {
    screen = screen + input;
    document.getElementById("screen").value = screen;
    opCounter = false;
  }
}
function Equals(screen, input) {
  let screenNew;

  if (screen === "+" || screen == "-" || screen == "*" || screen == "/") {
  } else if (screen.includes("+*") || screen.includes("+/")) {
    screenNew = screen.replace("+", "");
    let res = screenNew;
    screen = null;
    document.getElementById("screen").value = screen;
    document.getElementById("screen").value = eval(res.toString()).toFixed(4);
    resCounter = true;
  } else if (screen.includes("-/") || screen.includes("-*")) {
    screenNew = screen.replace("-", "");
    console.log("igual");
    let res = screenNew;
    screen = null;
    document.getElementById("screen").value = screen;
    document.getElementById("screen").value = eval(res.toString()).toFixed(4);
    resCounter = true;
  } else {
    console.log("igual");
    let res = screen;
    screen = null;
    document.getElementById("screen").value = screen;
    document.getElementById("screen").value = eval(res.toString()).toFixed(4);
    resCounter = true;
  }
}


