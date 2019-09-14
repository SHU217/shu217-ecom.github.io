
function showHide() {
var c=document.getElementById("hide");
if(c.style.display=="block") 
{
c.style.display="none";
document.getElementById("page").style.height="1100px";
}
else 
{
c.style.display="block";
document.getElementById("page").style.height="1400px";
}
}

