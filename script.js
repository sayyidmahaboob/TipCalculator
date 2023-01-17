// TIP CALCULATOR
resultPlaceHolder = document.getElementById("answer");
resultPlaceHolder.style.display = "none"; //Hide the tip amount on load

function tipCalculator() {
  const billAmount = parseFloat(
    document.getElementById("total-bill-amount").value
  );
  const serviceQuality = parseFloat(
    document.getElementById("service-quality").value
  );
  const numOfPeople = parseInt(
    document.getElementById("number-of-people").value
  );

  //-----------------------------------------------------------------------------------------------------------//

  // validate input if no-one enters alert

  if (billAmount === "" || serviceQuality == 0) {
    alert("Please enter values");
    return;
  }

  //-----------------------------------------------------------------------------------------------------------//

  // Check if the number of people value is empty or less than or equal to 1

  if (isNaN(numOfPeople) || numOfPeople < 1) {
    alert("Please Check Number of People");
    return;
  }

  //-----------------------------------------------------------------------------------------------------------//

  // Calculation of Tip

  var totalTip = billAmount * serviceQuality; //calc tip based on bill amount and service quality

  var totalTip = Math.round(totalTip * 100) / 100; // round the value

  //calculating Total bill amount including tip

  const totalBill = billAmount + totalTip;

  //calculating Tip per person

  const tipPerPerson = Math.floor(totalTip / numOfPeople);

  //-----------------------------------------------------------------------------------------------------------//

  //   displaying it in innerHTML with a block of answer

  document.getElementById("actual-bill").innerHTML = "&#8377;" + billAmount;
  document.getElementById("total-bill").innerHTML = "&#8377;" + totalBill;
  document.getElementById("tip-per-person").innerHTML =
    "&#8377;" + tipPerPerson;
  document.getElementById("total-tip").innerHTML = "&#8377;" + totalTip; // display the tip amount
  document.getElementById("answer").style.display = "block"; // display the answer place
}

//-----------------------------------------------------------------------------------------------------------//

// click to call the function

document.getElementById("calculate").onclick = function () {
  tipCalculator();
};
