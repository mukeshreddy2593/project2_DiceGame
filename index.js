var x=Math.floor(Math.random()*6)+1;
var randomimage1="images/dice"+x+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);

var y= Math.floor(Math.random() * 6) + 1;
var randomimage2 = "images/dice"+y+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(x>y){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(y>x){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}