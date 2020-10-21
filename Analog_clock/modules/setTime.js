import {clock,time,currentDate} from "../script.js"

const h=document.getElementById("hour")
const m=document.getElementById("minute")
// h.value=currentDate.getHours();
// m.value=currentDate.getMinutes()

const b=document.getElementById("btn").onclick=setTime;
function setTime(){
    currentDate.setHours(h.value,m.value,0)
    let obj2= new clock(currentDate);
    time(obj2)
}