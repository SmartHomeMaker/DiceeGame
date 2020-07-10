
let message, count1 = 0, count2 = 0, count=0;

function resetGame(){
  message = "Come Back to Play again!!!" ;
  count1 = 0;
  count2 = 0;
  count=0;
  document.getElementById("message").innerHTML = message;
}
function myFunction(){
  count++;
  let randNoPlayer1 = Math.floor (Math.random() * 7);
  let randNoPlayer2 = Math.floor (Math.random() * 7);

  count1= count1 + randNoPlayer1 ;
  count2= count2 + randNoPlayer2 ;

  selectTheDiceeForPlayer1(randNoPlayer1);
  selectTheDiceeForPlayer2(randNoPlayer2);

  if (randNoPlayer1 > randNoPlayer2){
    message = "💪Sashwati Won the Match! ";
  }
  else if(randNoPlayer2 > randNoPlayer1){
    message = "💪Prashasta Won the Match!";
  }
  else{
    message = "😇Match tally!";
  }

  document.getElementById("message").innerHTML = message;
  document.getElementById("total-round").innerHTML = count;
  document.getElementById("total-score-sashwati").innerHTML = count1;
  document.getElementById("total-score-prashasta").innerHTML = count2;
  }

function selectTheDiceeForPlayer1(number){
  switch(number){
    case 1:document.images[0].src = ".//dice1.png";
    break;
    case 2:document.images[0].src = ".//dice2.png";
    break;
    case 3:document.images[0].src = ".//dice3.png";
    break;
    case 4:document.images[0].src = ".//dice4.png";
    break;
    case 5:document.images[0].src = ".//dice5.png";
    break;
    case 6:document.images[0].src= ".//dice6.png";
    break;
    default:document.images[0].src = ".//dice3.png";
  }
}

function selectTheDiceeForPlayer2(number){
  switch(number){
    case 1:document.images[1].src = ".//dice1.png";
    break;
    case 2:document.images[1].src = ".//dice2.png";
    break;
    case 3:document.images[1].src = ".//dice3.png";
    break;
    case 4:document.images[1].src = ".//dice4.png";
    break;
    case 5:document.images[1].src = ".//dice5.png";
    break;
    case 6:document.images[1].src = ".//dice6.png";
    break;
    default:document.images[1].src = ".//dice3.png";
  }
}
