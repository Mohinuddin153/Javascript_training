
const hourHand = document.querySelector('#hour-hand')
const minuteHand = document.querySelector('#minute-hand')
const secondHand = document.querySelector('#second-hand')
const res=document.getElementById("res");
var ss=1000;
var interval;
export class clock {
    constructor(currentDate) {
        this.hour = currentDate.getHours();
        this.minute = currentDate.getMinutes();
        this.second = currentDate.getSeconds();
    }
    
    display=() =>{
        const secondsRatio = this.second++ / 60
        const minutesRatio = (secondsRatio + this.minute) / 60
        const hoursRatio = (minutesRatio + this.hour) / 12
        this.setRotation(secondHand, secondsRatio)
        this.setRotation(minuteHand, minutesRatio)
        this.setRotation(hourHand, hoursRatio);
        currentDate.setHours(this.hour,this.minute,this.second)
    }
    setRotation(hand, rotationRatio) {
        hand.style.setProperty('--rotation', rotationRatio * 360)
    }
}
const currentDate = new Date()

let obj= new clock(currentDate);
time(obj)
function time(obj,ss=1000){
    clearInterval(interval)
    interval=setInterval(obj.display,ss)
}
res.onclick=()=>time(new clock(new Date()));

export {obj,time,currentDate}
