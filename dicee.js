
function myFunction(){
  var randNoPlayer1 = Math.floor (Math.random() * 6);
  var randNoPlayer2 = Math.floor (Math.random() * 6);

  selectTheDiceeForPlayer1(randNoPlayer1);
  selectTheDiceeForPlayer2(randNoPlayer2);

  if (randNoPlayer1 > randNoPlayer2){
    var message = "✌ Sashwati Won the Match!";
  }
  else if(randNoPlayer2 > randNoPlayer1){
    var message = "✌Prashasta Won the Match!";
  }
  else{
    var message = "😇Match tally!";
  }

  document.querySelector("h1").innerHTML = message;

}

function selectTheDiceeForPlayer1(number){
  switch(number){
    case 1:document.images[0].src = "dice1.png";
    break;
    case 2:document.images[0].src = "dice2.png";
    break;
    case 3:document.images[0].src = "dice3.png";
    break;
    case 4:document.images[0].src = "dice4.png";
    break;
    case 5:document.images[0].src = "dice5.png";
    break;
    case 6:document.images[0].src= "dice6.png";
    break;
    default:document.images[0].src = "dice3.png";
  }
}

function selectTheDiceeForPlayer2(number){
  switch(number){
    case 1:document.images[1].src = "dice1.png";
    break;
    case 2:document.images[1].src = "dice2.png";
    break;
    case 3:document.images[1].src = "dice3.png";
    break;
    case 4:document.images[1].src = "dice4.png";
    break;
    case 5:document.images[1].src = "dice5.png";
    break;
    case 6:document.images[1].src = "dice6.png";
    break;
    default:document.images[1].src = "dice3.png";
  }
}
