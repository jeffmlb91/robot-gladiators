var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function () {
  //Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators !");

  //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update in the 'enemyHealth' variable
  enemyHealth = enemyHealth - playerAttack;

  //log a resulting message to the console so we know that it worked.
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining"
  );
  //Subtract the 'enemyAttack' from the value of 'playerHealth' and use that result to update inn the 'playerHealth' variable

  //Log a resulting message to the console so we know that it worked.
};

fight();
