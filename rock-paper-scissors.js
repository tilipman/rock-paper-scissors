function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"]; //the array contains a list of choices
  var randomChoice = choices[Math.floor(Math.random() * choices.length)]; // floor rounds a number down
  //choices.length = 3 because there are items in choices array.
  //Math.random() returns a random number between 0-1. when multiplied by 3, it gives back a number between 0 and 3
  return randomChoice;
}
