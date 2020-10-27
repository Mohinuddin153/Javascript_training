import {clock,time} from "../script.js"

const ny=document.getElementById("ny")
const cl=document.getElementById("cl")
const dd=document.getElementById("dd")

ny.onclick=()=>{
var aestTime= new Date(new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"}));

tt(aestTime)
}

cl.onclick=()=>{
    var asiaTime= new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"}));
tt(asiaTime)
}
dd.onclick=()=>{
    var usaTime = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
  
    tt(usaTime)
}


// var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
// console.log('India time: '+ (new Date(indiaTime)).toISOString())
function tt(currentDate){

let obj=new clock(currentDate);
time(obj)
}