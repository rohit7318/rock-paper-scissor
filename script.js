const allButtons = document.querySelectorAll(".button");
const winLossEl = document.getElementById("winOrLoss");
const wlSlogan = document.getElementById("winLossSlogan");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const mainEl = document.getElementById("main");
const popEl = document.getElementById("pop-up");
const restartBtnEl = document.getElementById("restartBtn");



const placeHolderImages = document.querySelectorAll(".placeholderImage");
const playerImage = document.getElementById("playerImage");
const computerImage = document.getElementById("computerImage");

// 
const choiceArray =["Rock","Paper","Scissor"];
// 

let userChoice,computerChoice;

let whoWin,log,playerScore=0,computerScore=0;

allButtons.forEach((image)=>{

    image.addEventListener("click",()=>{
         userChoice = image.id;
         computerChoice = getComputerChoice();

        removePlaceholderImages();
        removeHiddenClassesFromResultImages();
        updateImages(userChoice,computerChoice);
       let resultObj =  checkResult(userChoice,computerChoice);
       updateUI(resultObj);



    });
});

restartBtnEl.addEventListener("click",()=>{

    hidePopup();
    updateUIRestart();
    



});

function updateUIRestart()
{
   
    whoWin = "Choose Your Weapon";
    log = "The one who scores the first 5 points will win.";
    playerScore =0;
    computerScore =0;
    playerScoreEl.innerText = playerScore;
    computerScoreEl.innerText = computerScore;
    winLossEl.innerText = whoWin;
    wlSlogan.innerText = log;
}






function updateUI(obj)
{
    if(obj.playerScore >=5)
    {
        playerScoreEl.innerText = obj.playerScore;
        computerScoreEl.innerText = obj.computerScore;
        showPopup();
        updateUIRestart();
    }
    else if(obj.computerScore>=5)
    {
            playerScoreEl.innerText = obj.playerScore;
            computerScoreEl.innerText = obj.computerScore;
            showPopup();
            updateUIRestart();
    }
    else 
    {
        playerScoreEl.innerText = obj.playerScore;
        computerScoreEl.innerText = obj.computerScore;
        winLossEl.innerText = obj.whoWin;
        wlSlogan.innerText = obj.log;
    }
}


function hidePopup()
{
    mainEl.classList.remove("blur");
    popEl.classList.add("hidden");
    makeButtonsClickable();
}



function showPopup()
{
    mainEl.classList.add("blur");
    popEl.classList.remove("hidden");
    makeButtonsDisabled();
}

function makeButtonsClickable()
{
    allButtons.forEach((button)=>{
        button.disabled = false;
    })
}

function makeButtonsDisabled()
{
    allButtons.forEach((button)=>{
        button.disabled = true;
    })
}

function checkResult(userChoice,computerChoice)
{
    if(userChoice==="Rock" && computerChoice==="Scissor")
    {
            // user wins
            whoWin="You Win..";
            log =`${userChoice}  beats ${computerChoice}!`;
            playerScore++;
    }
    else if(userChoice==="Paper" && computerChoice==="Rock")
    {
            // user wins
            whoWin ="You Win";
            log =`${userChoice}  beats ${computerChoice}!`;
            playerScore++;
    }
    else if(userChoice==="Scissor" && computerChoice==="Paper")
    {
            // user wins
            whoWin="You Win.."
            log =`${userChoice}  beats ${computerChoice}!`;
            playerScore++;
    }
    else if(userChoice===computerChoice)
    {
        // Ties...
        whoWin = "Ties.."
        log=`${userChoice} ties with ${computerChoice}`;
    }
    else 
    {
        // Computer Wins....
        whoWin = "You Lost..."
        log=`${userChoice} is beaten by ${computerChoice}`;
        computerScore++;
    }
    return {whoWin,log,playerScore,computerScore};
}

function updateImages(userChoice,computerChoice)
{

    let userChoiceImage = "";
    let computerChoiceImage="";
    switch(userChoice)
    {
        case "Rock":
            userChoiceImage = "✊";
            break;
        case "Paper":
            userChoiceImage = "✋"
            break;
        case "Scissor":
            userChoiceImage = "✌"
            break;
        default :
        console.log("User Choice : " + userChoice);
        userChoiceImage ="Error in switch case while parsing the image";
        console.error("Error in switch case");
        break;    
    }
    switch(computerChoice)
    {
        case "Rock":
            computerChoiceImage = "✊";
            break;
        case "Paper":
            computerChoiceImage = "✋"
            break;
        case "Scissor":
            computerChoiceImage = "✌"
            break;
        default :
        computerChoiceImage ="Error in switch case while parsing the image";
        console.error("Error in switch case");
        break;    
    }

    playerImage.innerText=userChoiceImage;
    computerImage.innerText=computerChoiceImage;


}



function removeHiddenClassesFromResultImages()
{
    playerImage.classList.remove("hidden");
    computerImage.classList.remove("hidden");
}


function removePlaceholderImages()
{
    placeHolderImages[0].classList.add("hidden");
    placeHolderImages[1].classList.add("hidden");
}

function getComputerChoice()
{
    return choiceArray[parseInt(Math.random()*3)];
}










