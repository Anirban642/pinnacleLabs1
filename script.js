let display = document.getElementById("display");

function appendNumber(num) {
  if (display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  display.innerText += op;
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculateResult() {
  try {
    const result = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
