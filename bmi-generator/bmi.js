const form = document.querySelector("form");
// console.log(form)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = ` please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`

    let message = "";
    if (bmi < 18.5) {
      message = "Your weight is under weight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message = "Your weight is in the normal range.";
    } else {
      message = "Your weight is over weight.";
    }

    // Display the result message
    results.innerHTML = `<span>${bmi}</span> - ${message} `;
  }
});
