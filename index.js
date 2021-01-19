var readlineSync = require('readline-sync');
var chalk = require('chalk');
var gradient = require('gradient-string');
var animation = require('chalk-animation');
var score =0;

var username = readlineSync.question(chalk.cyan('What is your name  : ? ')).toUpperCase();
console.log("\n"+chalk.magentaBright("Welcome - ")+chalk.green(username)+
"\n\n"+chalk.underline(gradient.rainbow("To the World of Marvel Cinematic Universe ")));


console.log(chalk.keyword('orange')("\n This quiz has 15 questions."));
console.log(chalk.keyword('orange')("\n Each corrent answer will earn you 1 point and 0 points for wrong answer."));
console.log(chalk.keyword('orange')("\n You will clear level 1 on answering 5 correct answer"));
console.log(chalk.keyword('orange')("\n You will reach level 2 on answering 10 correct answer"));

console.log(gradient.rainbow("\n Lets Start the Quiz - \n"));


answer_one = ['Destroyer', 'Thunder-storm', 'Jerico', 'Star-storm'];
answer_two = ['Iron Man 1', 'Iron Man 2', 'Captain America The Winter Soldier', 'Avengers'];
answer_three = ['Dr Zola', 'Dr Bruce', 'Dr Pym', 'Dr Strange'];
answer_four = ['Iron Man 1', 'Iron Man 2', 'Captain America The Winter Soldier', 'Avengers'];
answer_five= ['Five', 'Six', 'Four', 'Eight'];
answer_six = ['Morag', 'Kree', 'Vormir', 'Earth'];
answer_seven = ['Red Skull', 'Thanos', 'Loki', 'Ronan'];
answer_eight = ['Space Stone', 'Reality Stone', 'Mind Stone', 'Soul Stone'];
answer_nine = ['Space Stone', 'Reality Stone', 'Mind Stone', 'Soul Stone'];

answer_ten = ['Cat', 'Rat', 'Ant', 'Wasp'];
answer_eleven= ['Destroyer', 'Thunder-storm', 'Mjolnir', 'Storm-Breaker'];

answer_twelve= ['Destroyer', 'Thunder-storm', 'Mjolnir', 'Storm-Breaker'];
answer_thirteen = ['Odin', 'Thor', 'Loki', 'Hela'];
answer_fourteen = ['Nebula', 'Mantis', 'Gamora', 'Hela'];
answer_fiveteen = ['Asgard', 'Midgard', 'Jotunheim', 'Vormir']

Question_one = {
  question : "Q.1 What was the name of missile that Tony build in iron man 1 for the US military ?",
  answer : 'Jerico',
  answerlist : answer_one
}

Question_two = {
  question : "Q.2 Which movie of MCU, Elon Musk has a cameo ?",
  answer : "Iron Man 2",
  answerlist : answer_two
}

Question_three = {
  question : "Q.3 What was the name of the doctor who worked with hydra ?",
  answer : "Dr Zola",
  answerlist : answer_three
}

Question_four = {
  question : "Q.4 In which movie, shield came to know that it has been compromised by hydra agents ?",
  answer : "Captain America The Winter Soldier",
  answerlist : answer_four
}

Question_five = {
  question : "Q.5 How many infinity stones are there in the MCU ?",
  answer : 'Six',
  answerlist : answer_five
}

Question_six = {
  question : "Q.6 Where did Thanos found the soul stone ?",
  answer : "Vormir",
  answerlist : answer_six
}

Question_seven = {
  question : "Q.7 Who was the villian in Captain America : The First Avenger ?",
  answer : "Red Skull",
  answerlist : answer_seven
}

Question_eight = {
  question : "Q.8 Which stone was hidden inside the Tessaract Cube ?",
  answer : "Space Stone",
  answerlist : answer_eight
}

Question_nine = {
  question : "Q.9 Which stone the ether was ?",
  answer : 'Reality Stone',
  answerlist : answer_nine
}

Question_ten = {
  question : "Q.10 Who started the Time Van and brought back Scot Lang back after the Infinity War?",
  answer : "Rat",
  answerlist : answer_ten
}

Question_eleven = {
  question : "Q.11 What was name of Thor's Hammer ?",
  answer : "Mjolnir",
  answerlist : answer_eleven
}

Question_twelve = {
  question : "Q.12 What was name of Thor's new weapon ?",
  answer : "Storm-Breaker",
  answerlist : answer_twelve
}

Question_thirteen = {
  question : "Q.13 Who was King of Asgard ?",
  answer : "Odin",
  answerlist : answer_thirteen
}

Question_fourteen = {
  question : "Q.14 What was name of Thor's sister ?",
  answer : "Hela",
  answerlist : answer_fourteen
}

Question_fiveteen = {
  question : "Q.15 Loki was born on ?",
  answer : "Jotunheim",
  answerlist : answer_fiveteen
}

function play(Question,answer,Answer)
{
  console.log(chalk.cyanBright(Question));
  
  index = readlineSync.keyInSelect(Answer, 'Choose one option number : ');
  console.log('You have selected ' + Answer[index]);  
 
  var useranswer= Answer[index];
 
  if(useranswer==answer){
    score=score+1;
    console.log(chalk.green("Hurray, you answered correctly;"));
  }
  else
  {
    console.log(chalk.red("Oops! , you answer is wrong;"));
  }
   
}


var listquestion = [Question_one,Question_two,Question_three,Question_four,Question_five,Question_six,Question_seven,Question_eight,Question_nine,Question_ten,Question_eleven,Question_twelve,Question_thirteen,Question_fourteen,Question_fiveteen]

for(var i=0;i<listquestion.length;i++){
play(listquestion[i].question,listquestion[i].answer,listquestion[i].answerlist);
console.log("Your score is :",score);
console.log("-----------------------------------------");

if(score==5)
{
  console.log("----------------------------------------");
  console.log(chalk.bgHex('#DEADED').underline('Congratulations. You are now on level 2'));
  console.log("----------------------------------------");
}

if(score==10)
{
  console.log("----------------------------------------");
  console.log(chalk.bgHex('#DEADED').underline('Congratulations. You are now on level 2'));
  console.log("----------------------------------------");
}
}

console.log(chalk.green(username+" your final score is : "+score));

/* High Score*/

var oldUser= {
  name:'RAJAT',
  highScore:10,
}
var currentUser= {
  name: username,
  highScore: score,
}


if(oldUser.highScore >currentUser.highScore){
  console.log(oldUser.name +"'s score : "+oldUser.highScore);
  console.log(currentUser.name +"'s score : "+currentUser.highScore)
  console.log(chalk.bold.cyanBright("You have failed to beat :- " + oldUser.name));
}
else{
  console.log(oldUser.name +"'s score : "+oldUser.highScore)
  console.log(currentUser.name +"'s score : "+currentUser.highScore)
  console.log(chalk.bold.cyanBright("You have beaten - " + oldUser.name));
}
console.log("----------------------------------------");