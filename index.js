const game = document.getElementById("game");
const startGame = document.getElementById("start-button");
const restart = document.getElementById("restart");
const text = document.getElementById("text");
const confirmNumber = document.getElementById("confirm");
const decline = document.getElementById("decline");
const greaterThan = document.getElementById("greaterThan");
const lowerThan = document.getElementById("lowerThan");

const arrayOfNumbers = Array.from(Array(101), (_,x) => x);
let noOfGuesses=0;
let start = 0;
let end = arrayOfNumbers.length-1;
let mid;

startGame.onclick = () =>{
    startGame.style.display = "none";
    play();
}



function play() {
    noOfGuesses++;
    mid = Math.floor((start + end) / 2);
    text.innerHTML = `is ${mid} your number?`;
    decline.style.display = "block";
    confirmNumber.style.display = "block";
    restart.style.display = "block";    
    greaterThan.style.display = "none";
    lowerThan.style.display = "none";
}

confirmNumber.onclick = () =>{
    if(noOfGuesses===1){
        alert(`took me ${noOfGuesses} guess to find your number :)`);
    }else{
        alert(`took me ${noOfGuesses} guesses to find your number :)`);
    }
    
    
}

decline.onclick = () =>{
    text.innerHTML = `is your number higher than ${mid}?`;
    confirmNumber.style.display = "none";
    decline.style.display = "none";
    greaterThan.style.display = "block";
    lowerThan.style.display = "block";
}

greaterThan.onclick = () =>{
    start = mid + 1; 
    play();

}

lowerThan.onclick = () =>{
    end = mid - 1;
    play();
}

restart.onclick = () =>{
    text.innerHTML = "Think of a number between 0 to 100";
    confirmNumber.style.display = "none";
    decline.style.display = "none";
    greaterThan.style.display = "none";
    lowerThan.style.display = "none";
    restart.style.display = "none";
    startGame.style.display = "block";
    start = 0;
    end = arrayOfNumbers.length-1;
    noOfGuesses = 0;
}