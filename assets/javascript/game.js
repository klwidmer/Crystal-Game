$ (document).ready(function() {

    
var crystalOne = generateRandNum (1,12)
var crystalTwo = generateRandNum (1,12)
var crystalThree = generateRandNum (1,12)
var crystalFour = generateRandNum (1,12)
var userNumber = 0
var wins = 0
var losses = 0
var crystalNumber = 0

    $("#randomButton").on("click", function() {
        var randNum =  generateRandNum(19,120)
        crystalNumber = randNum;
        $("#randomNumber").html(randNum);
        $("#crystalButtons").html(userNumber);

    });

    $("#crystalButtonOne").on("click", function() {
        increaseUserNum(crystalOne);
    });

    $("#crystalButtonTwo").on("click", function() {
        increaseUserNum(crystalTwo);
    });

    $("#crystalButtonThree").on("click", function() {
        increaseUserNum(crystalThree);
       
    });

    $("#crystalButtonFour").on("click", function() {
        increaseUserNum(crystalFour);
    });

    // Creates a random number between 19,120
function generateRandNum (min, max ){
        return Math.floor((Math.random() * (max-min+1))+ min);
}

    // Used to increase usernumber everytime a crystal button is clicked on
function increaseUserNum (crystal){
        userNumber += crystal;
        $("#crystalButtons").html(userNumber);
        verifywin();
}

    // Resets all the numbers back to zero after a game is complete
function resetFunc(){
    crystalOne = generateRandNum (1,12);
    crystalTwo = generateRandNum (1,12);
    crystalThree = generateRandNum (1,12);
    crystalFour = generateRandNum (1,12);
    userNumber = 0 ;
    $("#crystalButtons").html(userNumber);
    crystalNumber = generateRandNum(19,120);
    $("#randomNumber").html(crystalNumber);
};

    // This function is used to verify wins and losses
function verifywin (){
    if (userNumber === crystalNumber) {
        wins++;
        document.getElementById("wins").textContent = wins;
        resetFunc ();
    } else if (userNumber > crystalNumber) {
        losses++;
        document.getElementById("losses").textContent= losses;
        resetFunc ();
    }
 }
});



