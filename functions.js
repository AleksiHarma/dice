function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


function handleDiceClick() {
 
  var randomNumber = rollDice();
  

  var diceImage = document.getElementById("diceImage");
  
 
  diceImage.src = "dice" + randomNumber + ".png";
}


document.getElementById("dice").addEventListener("click", handleDiceClick);