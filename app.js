userNumber = $("#userGuss");


function handelClick() {
  var form = document.getElementById("myForm");

  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', handleForm);

  let input = Number(userNumber.val());


  if (input <= 50) {
    let total = input * 3.50;
    $("#userTotal").html('<h3> Your Total Bill : '+total+'$ </h3>');
    $("#result").html(" <h3>you will pay 3.50$/unit </h3><button class='l drum'><a href='index.html'>'Again' </a></button> ");
  } else if (input > 50 && input < 150) {
    let firstCalc = input - 50;
    let secCalc = firstCalc * 4.0;
    let total = (50 * 3.50) + secCalc;
    $("#userTotal").html('<h3> Your Total Bill : '+total+'$ </h3>');
    $("#result").html("  <h3>3.50$/Unit for first 50 Units & 4.0$/Unit from 50 TO 150 Units </h3> <button class='l drum'><a href='index.html'>'Again' </a></button>");
  } else if (input > 150 && input < 250) {
    let firstCalc = input - 50;
    let secCalc = firstCalc - 100;
    let total = (secCalc * 5.20) + (50 * 3.50) + (100 * 4.0)
    $("#userTotal").html('<h3> Your Total Bill : '+total+'$ </h3>');
    $("#result").html("  <h3> 3.50$/Unit for first 50 Units & 4.0$/Unit from 50 TO 150 Units & 5.20$/Unit from 150 TO 250 Units </h3> <button class='l drum'><a href='index.html'>'Again' </a></button>");

  } else if (input > 250) {
    let firstCalc = input - 50;
    let secCalc = firstCalc - 100;
    let thirdCalc = secCalc - 100;
    let total = (thirdCalc * 6.50) + (50 * 3.50) + (100 * 4.0) + (100 * 5.20)
    $("#userTotal").html('<h3> Your Total Bill : '+total+'$ </h3>');
    $("#result").html("  <h3> 3.50$/Unit for first 50 Units & 4.0$/Unit from 50 TO 150 Units & 5.20$/Unit from 150 TO 250 Units & 6.50$/Units after 250 Units </h3> <button class='l drum'><a href='index.html'>'Again' </a></button>");

  }

  userNumber.val("");

}
