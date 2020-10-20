import {clock,time,currentDate} from "../script.js"

const h=document.getElementById("hour")
const m=document.getElementById("minute")
const b=document.getElementById("btn").onclick=rr
function rr(){
    currentDate.setHours(h.value,m.value,0)
    let obj2= new clock(currentDate);
    time(obj2)
}