var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;

var diceimage1="images/dice"+randomnumber1+".png";
var diceimage2="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceimage1)
document.querySelectorAll("img")[1].setAttribute("src",diceimage2)

if (randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML="Player1 Won";
}
else if (randomnumber1==randomnumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}
else
{   
    document.querySelector("h1").innerHTML="Player2 Won";
}