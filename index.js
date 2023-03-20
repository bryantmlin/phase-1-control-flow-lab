function scuberGreetingForFeet(value){
  // Write your code here!
  if (value<400)
  {
    return "This one is on me!"
  }
  else if (value>=400 && value < 2000)
  {
    return "That will be twenty bucks."
  }
  else if (value>=2000 && value<2500)
  {
    return "I will gladly take your thirty bucks."
  }
  else return "No can do."
}

function ternaryCheckCity(city){
  // Write your code here!
  const check = city === "NYC" ? "Ok, sounds good." : "No go.";
  return check;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
  }
  return response;
  // Write your code here!

}