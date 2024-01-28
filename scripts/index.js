function taskOne() {
  let firstTaskAnswer = document.getElementById("firstTaskAnswer").value;

  if (isNaN(firstTaskAnswer)) {
    alert("Please enter a valid number.");
    return false;
  }

  let age = parseInt(firstTaskAnswer);
  if (age >= 0 && age <= 12) {
    document.getElementById("firstAnswerOutput").innerHTML = "You are a child";
  } else if (age > 12 && age < 18) {
    document.getElementById("firstAnswerOutput").innerHTML = "You are a teen";
  } else if (age > 18 && age < 60) {
    document.getElementById("firstAnswerOutput").innerHTML = "Your are adult";
  } else if (age >= 60) {
    document.getElementById("firstAnswerOutput").innerHTML =
      "Your are an old man";
  }
  return false;
}

function taskTwo() {
  let secondTask = document.getElementById("secondTaskAnswer").value;
  if (isNaN(secondTask)) {
    alert("Please enter a valid number.");
    return false;
  }

  let number = parseInt(secondTask);

  switch (number) {
    case 0: {
      document.getElementById("secondAnswerOutput").innerHTML = ")";
      break;
    }
    case 1: {
      document.getElementById("secondAnswerOutput").innerHTML = "!";
      break;
    }
    case 2: {
      document.getElementById("secondAnswerOutput").innerHTML = "@";
      break;
    }
    case 3: {
      document.getElementById("secondAnswerOutput").innerHTML = "#";
      break;
    }
    case 4: {
      document.getElementById("secondAnswerOutput").innerHTML = "$";
      break;
    }
    case 5: {
      document.getElementById("secondAnswerOutput").innerHTML = "%";
      break;
    }
    case 6: {
      document.getElementById("secondAnswerOutput").innerHTML = "^";
      break;
    }
    case 7: {
      document.getElementById("secondAnswerOutput").innerHTML = "&";
      break;
    }
    case 8: {
      document.getElementById("secondAnswerOutput").innerHTML = "*";
      break;
    }
    case 9: {
      document.getElementById("secondAnswerOutput").innerHTML = "(";
      break;
    }
    default: {
      document.getElementById("secondAnswerOutput").innerHTML =
        "Number has to be 0 - 9";
    }
  }
  return false;
}

function taskThree() {
  let thirdTask = document.getElementById("thirdTaskAnswer").value;
  if (isNaN(thirdTask)) {
    alert("Please enter a valid number.");
    return false;
  }

  let stringNumber = thirdTask.toString();
  isDigitsThree(stringNumber)
    ? (document.getElementById("thirdAnswerOutput").innerHTML =
        "Input three digits number")
    : isAllDigitsSame(stringNumber)
    ? (document.getElementById("thirdAnswerOutput").innerHTML =
        "All digits are same")
    : (document.getElementById("thirdAnswerOutput").innerHTML =
        "All digits are not same");
  function isDigitsThree(number) {
    return number.length != 3;
  }
  function isAllDigitsSame(number) {
    for (let i = 1; i < number.length; i++) {
      if (number[i - 1] !== number[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function taskFour() {
  let fourthTask = document.getElementById("fourthTaskAnswer").value;

  let year = parseInt(fourthTask);
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? (document.getElementById("fourthAnswerOutput").innerHTML = "Leap year")
    : (document.getElementById("fourthAnswerOutput").innerHTML =
        "Non leap year");

  return false;
}

function taskFive() {
  let task = document.getElementById("fifthTaskAnswer").value;
  let polindrom = task.toString();
  isPalindrom(task)
    ? (document.getElementById("fifthAnswerOutput").innerHTML = "Polindrom")
    : (document.getElementById("fifthAnswerOutput").innerHTML =
        "Non polindrom");

  function isPalindrom(str) {
    let lastIndex = str.length - 1;
    for (let firstIndex = 0; firstIndex < lastIndex; firstIndex++) {
      if (str[firstIndex] !== str[lastIndex]) return false;
      lastIndex--;
    }
    return true;
  }
  return false;
}

function taskSix() {
  const selectedRadio = document.querySelector(
    'input[name="currency"]:checked'
  );
  let rate = parseFloat(selectedRadio.value);

  let currentValue = parseFloat(document.getElementById("sixTaskAnswer").value);
  currentValue *= rate;
  document.getElementById("sixAnswerOutput").innerHTML =
    currentValue.toFixed(2);
  return false;
}

function taskSeven() {
  let task = document.getElementById("sevenTaskAnswer").value;
  if (isNaN(task)) {
    return false;
  }
  let discount;
  let sum = parseFloat(task);
  if (sum > 200 && sum <= 300) discount = 0.03;
  else if (sum > 300 && sum <= 500) discount = 0.05;
  else if (sum > 500) discount = 0.07;
  else {
    discount = 0;
  }
  let saleSum = sum - sum * discount;
  let answer = saleSum.toFixed(2).toString() + " $";
  document.getElementById("sevenAnswerOutput").innerHTML = answer;
  return false;
}

function getCircleRadius(circleLength) {
  if (isNaN(circleLength)) return false;
  let radius = parseFloat(circleLength) / (2 * Math.PI);
  let answer = "Circle radius = " + radius.toFixed(3).toString();
  document.getElementById("radius").innerHTML = answer;
  return radius;
}
function getSquareSide(squarePerimetre){
  if(isNaN(squarePerimetre))return false;
  let side = parseFloat(squarePerimetre) / 4;
  let answer = "Square side = " + side.toFixed(3).toString();
  document.getElementById("side").innerHTML = answer;
  return side;
}
function isCircleInsideSquare(circleRadius, squareSide) {
  if (isNaN(circleRadius) || isNaN(squareSide)) return -1;
  return circleRadius <= squareSide/2;
}

function taskEight() {
  let circleLength = document.getElementById("eightTaskAnswerCircle").value;
  let squarePerimeter = document.getElementById("eightTaskAnswerSquare").value;
  if (!isNaN(circleLength) && !isNaN(squarePerimeter)) {
    isCircleInsideSquare(getCircleRadius(circleLength), getSquareSide(squarePerimeter))
      ? (document.getElementById("eightAnswerOutput").innerHTML =
          "Circle is in square")
      : (document.getElementById("eightAnswerOutput").innerHTML =
          "Circle is not in square");
  }
  document
    .getElementById("eightTaskAnswerCircle")
    .addEventListener("input", taskEight);
  document
    .getElementById("eightTaskAnswerSquare")
    .addEventListener("input", taskEight);
}
