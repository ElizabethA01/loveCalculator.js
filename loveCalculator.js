// Building a Love Calculator using JavaScript

var name1 = prompt("Enter first name: ");
var name2 = prompt("Enter second name: ");

function randomGenerator () {
var result = Math.random()*100;
var loveScore = Math.floor(result) +1; // 1-100
if (loveScore > 70) {
    alert("Your love score is: " + Math.floor(result) + "%" + " You're a match made in heaven!");
} 

if (loveScore >30 && loveScore <= 70) {
    alert("Your love score is: " + Math.floor(result) + "%");   
} 

if (loveScore <= 30) {
    alert("Your love score is: " + Math.floor(result) + "%" + " You go together like cat and mouse.");
}
}

randomGenerator()
