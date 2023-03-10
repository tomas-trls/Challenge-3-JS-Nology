function checkPositiveOrNegative(number) {

  if(number > 0){
    console.log('Positive!')
  } else if (number == 0){
    console.log(`${number} is zero`)
  } else {
    console.log('Negative!');
  }
}

function checkGreatedNumber(num1, num2, num3) {
  if (num1 > num2 && num1>num3){
    console.log(`${num1} is the bigest!`)
  } else if (num2 > num1 && num2 > num3){
    console.log(`${num2} is the biggest!`)
  } else {
    console.log(`${num3} is the biggest!`)
  }
}

function daysUntilWeekend(day){
  switch(day){
    case "Monday":
      console.log("Only 4 days until end of the week");
      break;
    case "Tuesday":
      console.log("Only 3 days until end of the week");
      break;
    case "Wednesday":
      console.log("Only 2 days until end of the week");
      break;
    case "Thursday":
      console.log("Come On! One more day!");
      break;
    case "Friday":
      console.log("WEEK END IS TONIGHT!!! WOOOOOO!");
      break;
  }
}

function checkVegetablePrice(vegetable){
  let veggie = vegetable.toLowerCase();
  switch(veggie){
    case "carrots":
      console.log("Price for carrots is 0.99£/kg")
      return 0.99;
    case "potatoes":
      console.log("Price for potatoes is 0.99£/kg")
      return 0.99;
    case "brocolli":
      console.log("Price for brocolli is 1.20£/kg")
      return 2.25;
    case "cabbage":
      console.log("Price for Cabbage is 1.10£/kg")
      return 3.99;
    case "asparagus":
      console.log("Price for asparagus is 0.50£/kg")
      return 1.99;
  }
}


function showPrice() {
  // Get the selected vegetable
  var vegetable = document.getElementById("vegetable-select").value;

  // Get the price for the selected vegetable
  var price = checkVegetablePrice(vegetable);

  // Show the price in an alert box
  alert(`The price of ${vegetable} is ${price} per kg.`);
  }

checkPositiveOrNegative(-4);
checkGreatedNumber(-1,-4,-10)
daysUntilWeekend("Friday");
checkVegetablePrice("Brocolli");
