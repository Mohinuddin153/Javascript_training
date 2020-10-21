import {clock, currentDate, time} from "../script.js"

const sp=document.getElementById("sp-val")
const ss=document.getElementById("sp-btn").onclick=speed;

function speed(){
time(new clock(currentDate),(1000/sp.value))
}