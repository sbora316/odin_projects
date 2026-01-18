
const btn = document.getElementById("btn");
let h3=document.getElementById("h3");


btn.onclick = function(){

let gameNumber = Math.floor(Math.random() * 100) + 1;
let userNumber= document.getElementById("inputbox").value;

console.log(gameNumber);
    if (userNumber == gameNumber){
        h3.innerText = "Congratulations"}
    else{
        h3.innerText = `Oops! Wrong Number. Game number was ${gameNumber}. Try again!`}
    
};

