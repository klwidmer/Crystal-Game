$ (document).ready(function() {

var crystalOne = generateRandNum (1,12)
var crystalTwo = generateRandNum (1,12)
var crystalThree = generateRandNum (1,12)
var crystalFour = generateRandNum (1,12)
var userNumber = 0
var randNum = 0
var wins = 0
var losses = 0


 

    $(".randomButton").on("click", function() {
        var randNum =  generateRandNum(19,120)
        console.log (randNum);
        $("#randomNumber").append("<h2>" + randNum + "</h2>")
        $("#crystalButtons").append("<h2 id='userNumber'>" + userNumber + "</h2>")

    });

    $(".crystalButtonOne").on("click", function() {
      userNumber += crystalOne
      $("#userNumber").html(userNumber)
    });

    $(".crystalButtonTwo").on("click", function() {
        userNumber += crystalTwo
        $("#userNumber").html(userNumber)
    });

    $(".crystalButtonThree").on("click", function() {
        userNumber += crystalThree
        $("#userNumber").html(userNumber)
    });

    $(".crystalButtonFour").on("click", function() {
        userNumber += crystalFour
        $("#userNumber").html(userNumber)
    });

    
function generateRandNum (min, max ){
        return Math.floor((Math.random() * (max-min+1))+ min);
}

    if (userNumber === randNum) {
        wins++;
        alert("You Win!");
        document.getElementById("wins").textContent = wins;
        resetFunc();
    } else if (userNumber <= randNum) {
        losses++;
        alert("You Lose!");
        document.getElementById("losses").textContent="You lose!";
        resetFunc();
    }
});


// if userNumber < less than random number 

// $(".remove").click(function() {
    //     alert(this.id);
    //   });


