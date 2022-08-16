//document.getElementById("paragraph").innerHTML="Text Modifie";
//var para=document.querySelector("#paragraph");
//para.innerHTML="D'ont call me a mindless philosopher,you <br>sdocidjfiej";
//document.getElementById("para").innerHTML="Text Modifie";
//var variable=document.getElementById("#para").id;
//console.log(variable);

/*Q1*/
var nodelist=document.querySelectorAll(".cara");
for(var i=0;i<nodelist.length;i++)
{
    nodelist[i].style.backgroundColor="yellow";
}
/*Q2*/
var lien=document.createElement('a');
var text=document.createTextNode("https://forcemipsum.com");
lien.appendChild(text);
document.body.appendChild(lien);

/*Q3*/
var x=document.querySelectorAll(".point");
for(var i=0;i<x.length;i++)
{
    x[i].style.display="block";
}
/*Q4*/
const list=document.querySelector("p").innerHTML;
let number=list.length;
console.log(number);
const h1=document.getElementById("myhidding");
h1.insertAdjacentText("afterend",number);
/*Q5*/
img1=new Image();
img1.src="image1.png";
var remplcer=document.querySelectorAll(".QQQ");
for(var i=0;i<remplcer.length;i++)
{
    remplcer[i].replaceChild(remplcer,img1);
}




