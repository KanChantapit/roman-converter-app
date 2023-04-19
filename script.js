
const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

function convertToRoman() {
    let inputValue = document.getElementById("numberInput").value
  
    let roman = "";
  
    for (let key in romanNumerals) {
      while (inputValue >= romanNumerals[key]) {
        roman += key;
        inputValue -= romanNumerals[key];
      }
    }
  
    document.getElementById("roman-result").innerHTML = roman;
  }


document.getElementById("numberInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("convert-number-btn").click();
    }
  });


function clearInput(inputId) {
    document.getElementById(inputId).value = '';
  }