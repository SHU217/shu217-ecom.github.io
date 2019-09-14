function showId(obj) {
var buyid=obj;


document.getElementById("section").style.display="none";

document.getElementById("page").style.height="950px";

document.getElementById("cover").style.display="block";

document.getElementById("buypage").style.display="block";

document.getElementById(buyid).style.display="block";
document.getElementById(buyid).style.width="300px";
document.getElementById(buyid).style.float="right";

document.getElementById("buyproduct").appendChild(document.getElementById(buyid));

}



function myFunction() {

var pin=document.getElementById("pincode").value;
var i;
if(pin=="")
{
alert("Enter Pincode First");
return;
}
for(i=0;i<=10;i++)
 {
if(pin==271001||pin==271002||pin==271003)
{
document.getElementById("msgavail").innerHTML="Delivery Available in this area";
document.getElementById("bookorder").style.display="block";
}
else {
document.getElementById("msgavail").innerHTML="Delivery Not Available in this area";
document.getElementById("bookorder").style.display="none";
document.getElementById("msgsuccess").style.display="none";
document.getElementById("customer").style.display="none";
document.getElementById("note").style.display="none";
}
}

}


function showText() {

document.getElementById("msgsuccess").style.display="block";
document.getElementById("customer").style.display="block";
document.getElementById("note").style.display="block";
document.getElementById("note").innerHTML="please note this for future.";

}