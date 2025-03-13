function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!";
  }
  else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (feet > 2000 && feet <=2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return "No can do.";
  }


  // Write your code 
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2200));
console.log(scuberGreetingForFeet(2600));



function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
// Write your code here!
}

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much.";
  }
  else if (tip === "not as generous") {
    return "Thank you.";
  }
  else {
    return "Bye.";
  }
  // Write your code here!
}