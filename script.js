var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;    
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timert").innerHTML = " Ending In " + days + " Days : " + hours + " Hrs : "
  + minutes + " Mins : " + seconds + " Sec";
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timert").innerHTML = "EXPIRED";
  }
}, 1000);

function changebg(colorc,c){
    document.getElementById("btncollect").style.backgroundColor=colorc;
    document.getElementById("view").style.color=c;
}
function changecolor(element,c)
{
    element.style.color=c;
    if(c=="#f9781d")
    {
      element.style.borderBottom="2px solid #f9781d";
    }
    else
    {
       element.style.borderBottom="2px solid #2b3035";
    }
}
function size(element,s)
{
  element.style.transform='scale('+s+','+s+')';
}