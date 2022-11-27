function scuberGreetingForFeet(someValue){
  // Write your code here!
  let ride;

  if(someValue <= 400) {
    ride = 'This one is on me!';
  } else if(someValue <= 2000) {
    ride = 'That will be twenty bucks.';

  } else if (someValue <= 2500) {
    ride = 'I will gladly take your thirty bucks.'

  } else if (someValue >= 2500) {
    ride = 'No can do.';
  } else {

  }
  return ride;
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC' ? "Ok, sounds good." : 'No go.');
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}