let result = document.getElementById("result");
let key = document.getElementsByClassName("key");

const del = () => {
  if (result.innerHTML !== "0") {
    result.innerHTML = result.innerHTML.slice(0, -1);
    if (result.innerHTML === "") {
      result.innerHTML = "0";
    }
  }
};

const allClear = () => {
  result.innerHTML = "0";
  for (let i = 1; i < key.length; i++) {
    key[i].style.pointerEvents = "all";
    key[i].style.backgroundColor = "rgb(54, 48, 48)";
  }
};

const zero = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 0;
};

const one = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 1;
};

const two = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 2;
};

const three = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 3;
};

const four = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 4;
};

const five = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 5;
};

const six = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 6;
};

const seven = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 7;
};

const eight = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 8;
};

const nine = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML += 9;
};

const decimal = () => {
  if (result.innerHTML.includes(".")) {
    result.innerHTML = result.innerHTML;
  } else {
    result.innerHTML += ".";
  }
};

const plus = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  if (!result.innerHTML.endsWith("+")) result.innerHTML += "+";
};

const minus = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  if (!result.innerHTML.endsWith("-")) result.innerHTML += "-";
};

const multiply = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  if (!result.innerHTML.endsWith("*")) result.innerHTML += "*";
};

const divide = () => {
  if (result.innerHTML.startsWith("0")) makeNonZero();
  if (!result.innerHTML.endsWith("/")) result.innerHTML += "/";
};

const equals = () => {
  if (
    result.innerHTML.endsWith("+") ||
    result.innerHTML.endsWith("-") ||
    result.innerHTML.endsWith("*") ||
    result.innerHTML.endsWith("/")
  ) {
    result.innerHTML = result.innerHTML.slice(0, -1);
  }
  if (result.innerHTML.startsWith("0")) makeNonZero();
  result.innerHTML = eval(result.innerHTML);
  if (result.innerHTML.length < 12) {
    if (parseFloat(result.innerHTML) === parseInt(result.innerHTML)) {
      result.innerHTML = parseInt(result.innerHTML);
    } else {
      result.innerHTML = parseFloat(result.innerHTML).toFixed(2);
    }
  } else {
    result.style.fontSize = "12px";
    result.innerHTML = "ERROR: MAX LENGTH EXCEEDED";
  }
  for (let i = 1; i < key.length; i++) {
    key[i].style.pointerEvents = "none";
    key[i].style.backgroundColor = "rgba(253, 253, 253, 0.877)";
  }
};

const makeNonZero = () => {
  let final;
  if (result.innerHTML.includes(0, 0)) {
    final = result.innerHTML.substring(1);
  }
  result.innerHTML = final;
};
