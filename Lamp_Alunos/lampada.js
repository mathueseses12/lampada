const turnON = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn(){
if(!islampBroken()){
lamp.src = "ligada.jpg";
}}
function lampOff() {
if (!islampBroken()) {
lamp.src ="desligada.jpg";
}}
function lampBroken(){
lamp.src = "quebrada.jpg";
}
function islampBroken(){
return lamp.src.includes("quebrada");
}
turnON.addEventListener("click", lampOn);
turnOff.addEventListener("click" ,lampOff);
lamp.addEventListener("mouseover",lampOn);
lamp.addEventListener("mouseleave",lampOff);
lamp.addEventListener("dblclick" ,lampBroken);