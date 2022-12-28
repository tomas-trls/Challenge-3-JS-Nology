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

checkPositiveOrNegative(-4);
checkGreatedNumber(-1,-4,-10)
daysUntilWeekend("Friday");
