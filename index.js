var rn1=Math.floor(Math.random()*6)+1;
var ranimg1="images/d"+rn1+".png";
var rn2=Math.floor(Math.random()*6)+1;
var ranimg2="images/d"+rn2+".png";
var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];
img1.setAttribute("src",ranimg1);
img2.setAttribute("src",ranimg2);
if(rn1>rn2)
{
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(rn2>rn1)
{
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else
{
    document.querySelector("h1").innerHTML="draw!";
}