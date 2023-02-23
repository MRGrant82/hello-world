
    let myName = "Michael";
    alert("Welcome to my website!" + "  I am " + myName + ".");
    
    let userName = prompt("Enter your name please");
    alert("Welcome " + userName + " !")

    document.write("Welcome, " + "    " + userName)
    coffee();

    

    // Anatomy of a function
    
    // function declaration / function definition

    // function functionName(parameters){code to execute goes here;}

        // function addTwoNumbers(){
        // let num1 = 5;
        // let num2 = 10;
        // console.log(num1 + num2);
        // return num1 + num2;
        // }
    // addTwoNumbers();

    function coffee(){
        let coffeeChoice = prompt("Do you like coffee? Type yes or no");
    
    if (coffeeChoice == 'yes')
    {
        document.write("     Ahh!  You're also an enjoyer of the delicious black soup! I know this because you said " + coffeeChoice + ".")
    }
    else
    {document.write("We will work on your beverage choices.")}  

    }