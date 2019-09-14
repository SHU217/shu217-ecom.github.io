
function myFunction() {


var s=document.getElementById("searchtext").value;

if(s=="")
{
alert("Please Enter Product First");
return;
}
switch(s) {
case "lumia" :
case "galaxy" :
case "iphone" :
case "earphone" :
case "memorycard" :
case "powerbank" :
case "flipcover" :
case "screenguard" :
case "samsungearphone" :

case "compaqdesktop" :
case "hpdesktop" :
case "keyboard" :
case "pendrive" :
case "harddisk" :
case "cddrive" :
case "scanner" :
case "printer" :
case "mouse" :

case "hometheatre" :
case "game" :
case "projector" :
case "ledtv" :
case "camera" :
case "dvdplayer" :
case "speaker" :
case "ipod" :
case "soundbar" :

case "washingmachine" :
case "aircondition" :
case "fridge" :
case "microwaveowen" :
case "geyser" :
case "iron" :
case "toaster" :
case "purifier" :
case "juicer" :

case "navigationdevice" :
case "mobileholder" :
case "audio" :
case "vaccumecleaner" :

document.getElementById("found").innerHTML="Item Found !";

document.getElementById(s).style.display="block";
break;
default : document.getElementById("found").innerHTML="Item Not Found !";
}

}
