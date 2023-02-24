function welcomeMessage(name) {
    alert("Welcome to my website! I am " + name + ".");
  }
  
  function getUserInput() {
    let userName = prompt("Enter your name please");
    alert("Welcome " + userName + " !");
    return userName;
  }
  
  function printWelcomeMessage(userName) {
    document.write("Welcome, " + userName);
  }
  
  function askForCoffeePreference() {
    let coffeeChoice = prompt("Do you like coffee? Type yes or no");
  
    if (coffeeChoice == 'yes') {
      document.write("Ahh! You're also an enjoyer of the delicious black soup! I know this because you said " + coffeeChoice + ".");
    } else {
      document.write("We will work on your beverage choices.");
    }
  }
  
  function runWelcomeLoop() {
    let name = "Michael";
    let userName = "";
    while (!userName) {
      welcomeMessage(name);
      userName = getUserInput();
    }
    printWelcomeMessage(userName);
    askForCoffeePreference();
  }
  
  runWelcomeLoop();
  